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
          <div className='singlePostCard'>
            <div key={post._id} className="singleCard mb-3">
                <Link to={`/posts/${post._id}`}>
                    <img src={post.image}/>
                </Link>

              <div className="singlePostContent">
                <h3 className="card-header bg-primary text-light p-2 m-0">
                  <span  style={{ fontSize: '1rem' }} >
                    {post.postAuthor}:
                  </span>
                </h3>

                <div className="singlePostCap card-body bg-light p-2">
                  {post.description}
                </div>

                <div className='timeStamp'>
                  Posted at: {post.createdAt}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Feed;
