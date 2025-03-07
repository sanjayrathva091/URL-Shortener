const Url = require("../models/Url");
const shortid = require("shortid");
const redis = require("redis");

const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
});

exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();

    const newUrl = new Url({ originalUrl, shortUrl });
    await newUrl.save();

    // Cache in Redis
    redisClient.on("error", function (err) {
        throw err;
    });
    await redisClient.connect()
    redisClient.set(shortUrl, originalUrl);

    res.json({ shortUrl });
};

exports.redirectUrl = async (req, res) => {
    const { shortUrl } = req.params;

    redisClient.get(shortUrl, async (err, cachedUrl) => {
        if (cachedUrl) {
            return res.redirect(cachedUrl);
        }

        const url = await Url.findOne({ shortUrl });
        if (url) {
            redisClient.set(shortUrl, url.originalUrl);
            return res.redirect(url.originalUrl);
        } else {
            res.status(404).json({ error: "URL Not Found" });
        }
    });
};
