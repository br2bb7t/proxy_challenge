const schemaProxy = require('../models/proxy-model');

function saveStatistics() {

    return async function (req, res, next) {

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const proxy = new schemaProxy({
            'ip': ip,
            'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
        });

        proxy.save().then(() => console.log('Request to proxy has been saved'));
        next();
    }
}

module.exports = saveStatistics;