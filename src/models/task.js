const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({

    id: String,
    text: String,
    source: String,
    source_url: String

});

module.exports = mongoose.model('Task', Task);
