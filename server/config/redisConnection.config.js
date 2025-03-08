const redis = require("redis");

const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
});

const redisClientConnection = async () => {
    redisClient.on("error", function (err) {
        throw err;
    });
    try {
        await redisClient.connect();
    } catch (error) {
        throw error;
    }
};

module.exports = { redisClient, redisClientConnection };