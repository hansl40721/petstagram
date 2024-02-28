// import React from "react"

// const PostCard = ({ post, showUsername = true }) => {
//     if (!post.length) {
//         return <h3>No posts yet!</h3>
//     }

// return (
//     <div key={post.id} className='card'>\
//         {post.image && (
//             <img src={post.image} alt={post.description}/>
//         )}
//         <p>{post.description}</p>
//     </div>
// )
// }

// export default PostCard

import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  showUsername = true,
}) => {
  // if (!posts.length) {
  if (!posts) {
    // console.log(`Posts: ${window}`)
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post?._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
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
            <Link to={`/posts/${post._id}`}>
                <img src={post.image} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
