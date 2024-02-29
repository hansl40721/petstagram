import React from "react"
import { Link } from "react-router-dom"

const PostCard = ({showUsername, post}) => {
  console.log(`Post: ${JSON.stringify(post)}`);
    return (
    <div className="PostCard">
        <div key={post._id} className="card mb-3">
            <Link to={`/posts/${post._id}`}>
                <img src={post.image} />
            </Link>
            <div className="postContent">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profile/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    made this post on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You made this post on {post.createdAt}
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