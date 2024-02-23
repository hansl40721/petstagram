const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {    
        type: String, 
        required: false
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;