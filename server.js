const express = require('express')

const db = require('./models/db');
const {ROUTES} = require("./routes");

const {setupLogging} = require("./middlewares/logging");
const {setupRateLimit} = require("./middlewares/ratelimit");
const {setupProxies} = require("./middlewares/proxy");

const app = express()
const port = 3000;

setupLogging(app)
setupRateLimit(app, ROUTES);
setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`Proxy Challenge listening at http://localhost:${port}`)
})

