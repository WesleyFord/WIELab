const mongoose = require('mongoose')

var Schema = mongoose.Schema

var PostSchema = new Schema({

    userId: {
        required: true,
        type: mongoose.Types.ObjectId
    },

    header: {
        required: true,
        default: "New post",
        type: String
    },

    text: {
        required: true,
        default: "New post",
        type: String
    },

    picture: {
        //E: path to the picture
        type: String
    },

    keywords: {
        //E: array of keywords
        type: Array
    },

    isPublished: {
        default: false,
        type: Boolean
    },

    timestamp:{
        default: new Date(),
        type: Date
    }
})

module.exports = mongoose.model('Post', PostSchema)