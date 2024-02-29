import React from "react"
import { Link } from "react-router-dom"

const PostCard = ({showUsername, post}) => {
    return (
    <div className="PostCard">
        <div key={post._id} className="card mb-3">
            <Link to={`/posts/${post._id}`}>
                <img src={post.image} />
            </Link>
            <div className="postContent">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <>
                <span style={{ fontSize: '1rem' }}>
                  You made this post on {post.createdAt}
                </span>
              </>
              ) : (
                <>
                {post.postAuthor} <br />
                <span style={{ fontSize: '1rem' }}>
                  made this post on {post.createdAt}
                </span>
              </>                
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post.description}</p>
            </div>
            </div>
        </div>
    </div>
    );
}

export default PostCard