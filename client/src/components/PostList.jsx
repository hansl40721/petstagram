import React from "react"

const PostCard = ({ post, showUsername = true }) => {
    if (!post.length) {
        return <h3>No posts yet!</h3>
    }

return (
    <div key={post.id} className='card'>\
        {post.image && (
            <img src={post.image} alt={post.description}/>
        )}
        <p>{post.description}</p>
    </div>
)
}

export default PostCard