const { redisClient } = require("../config/redisConnection.config");
const Url = require("../models/Url");
const shortid = require("shortid");

exports.shortenUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        const shortUrl = shortid.generate();

        const newUrl = new Url({ originalUrl, shortUrl });
        await newUrl.save();

        // Cache in Redis
        await redisClient.set(shortUrl, originalUrl);
        res.json({ shortUrl });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", msg: error.message });
    }
};

exports.redirectUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const cachedUrl = await redisClient.get(shortUrl);

        if (cachedUrl) {
            return res.redirect(cachedUrl);
        }
        const url = await Url.findOne({ shortUrl });

        if (url) {
            await redisClient.set(shortUrl, url.originalUrl);
            return res.redirect(url.originalUrl);
        } else {
            return res.status(404).json({ error: "URL Not Found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error", msg: error.message
        });
    }
};
