const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schemaProxy = new Schema({
    ip: String,
    time: Number
}, {
    collection: 'statistics'
});

module.exports = mongoose.model('Model', schemaProxy);

