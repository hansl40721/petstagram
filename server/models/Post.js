const mongoose = require('mongoose');
const dayjs = require('dayjs');

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true,
    },
    image: {    
        data: Buffer, 
        contentType: String,
    },
    postAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(dateTime){
            return dayjs(dateTime).format("HH:mm:ss MM/DD/YYYY")
        },
    },
    comments: [
        {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          commentAuthor: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: function(dateTime){
                return dayjs(dateTime).format("HH:mm:ss MM/DD/YYYY")
            },
          },
        },
    ],
});

postSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

postSchema.set('toJSON', {
    virtuals: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;