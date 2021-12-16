const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const About = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String
    },
    banner: String,
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
})
module.exports = mongoose.model('abouts', About);