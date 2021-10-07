const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    task: String
})

exports.Post = mongoose.model('Post', postSchema)