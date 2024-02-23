const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
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

postSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

postSchema.set('toJSON', {
    virtuals: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;