// Import the `useParams()` hook
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries';

import "../styles/Component.css"

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="singlePostCard my-3">
      <div className='singleCard'>
        <div>
          <img src={post.image} />
        </div>

        <div className='singlePostContent'>
          <h3 className="card-header bg-dark text-light p-2 m-0">
            <Link to={`/profile/${post.postAuthor}`}>
              {post.postAuthor} <br />
            </Link>
            <span style={{ fontSize: '1rem' }}>
              made this post on {post.createdAt}
            </span>
          </h3>

          <div className="bg-light py-4">
              {post.description}
          </div>
        </div>
      </div>

      <div className='commentContain'>
        <div className="my-5">
          <CommentList comments={post.comments} />
        </div>
        <div className="m-3 p-4">
          <CommentForm postId={post._id} />
        </div>
      </div>

    </div>
  );
};

export default SinglePost;
