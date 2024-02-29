import { Link } from 'react-router-dom';
import PostCard from "./PostCard"
import "../styles/Component.css"

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
  }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className='postListContain'>
      {posts &&
        posts.map((post) => (
          <PostCard showUsername={showUsername} post={post}/>
        ))}
    </div>
  );
};

export default PostList;
