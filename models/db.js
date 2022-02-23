const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/requests-proxy')
    .then(() => console.log('Connection succeeded to DB Mongo'))
    .catch((error) => console.log('Error in connection to DB Mongo', error));


module.exports = mongoose.connection;