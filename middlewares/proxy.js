const { createProxyMiddleware } = require('http-proxy-middleware');
const saveStatistics = require('./statistics');

const setupProxies = (app, routes) => {
    routes.forEach(r => {
        app.use(r.url, saveStatistics(), createProxyMiddleware(r.proxy));
    })
}

exports.setupProxies = setupProxies