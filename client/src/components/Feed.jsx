import { Link } from 'react-router-dom';
import PostCard from "./PostCard"
import "../styles/Component.css"

const Feed = ({
  posts
  }) => {
  return (
    <div className='postListContain'>
      {posts &&
        posts.map((post) => (
          <>
          <div className="PostCard">
          <div key={post._id} className="card mb-3">
              <Link to={`/posts/${post._id}`}>
                  <img src={post.image} />
              </Link>
              <div className="postContent">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    made this post on {post.createdAt}
                  </span>
              </h4>
              <div className="card-body bg-light p-2">
                <p>{post.description}</p>
              </div>
              </div>
          </div>
      </div>
      </>
        ))}
    </div>
  );
};

export default Feed;
