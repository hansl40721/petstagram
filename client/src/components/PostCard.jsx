import React from "react"
import { Link } from "react-router-dom"

const PostCard = ({showUsername, post}) => {
    return (
    <div className="singlePostCard">
        <div key={post._id} className="singleCard mb-3">
            <Link to={`/posts/${post._id}`}>
                <img src={post.image} />
            </Link>

            <div className="singlePostContent">
              <h3 className="card-header bg-primary text-light p-2 m-0">
                {showUsername ? (
                  <>
                    <span style={{ fontSize: '1rem' }}>
                      {post.postAuthor} (you):
                    </span>
                  </>
                ) : (
                  <>
                    {post.postAuthor}:
                  </>                
                )}
              </h3>

              <div className="singlePostCap card-body bg-light p-2">
                <p>{post.description}</p>
              </div>

              <div className="timeStamp">
                Post at: {post.createdAt}
              </div>
            </div>
        </div>
    </div>
    );
}

export default PostCard