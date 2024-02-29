// Import the `useParams()` hook
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { REMOVE_COMMENT } from '../utils/mutations';
import { QUERY_SINGLE_POST } from '../utils/queries';
import Auth from '../utils/auth';
import "../styles/Component.css"

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });

  const [removeComment] = useMutation(
    REMOVE_COMMENT, {
      refetchQueries: [
        QUERY_SINGLE_POST,
        'getSinglePost'
      ]
    });

  const handleRemoveComment = async (event) => {
    if (confirm("Are you sure you want to delete this comment?")) {
    try {
      const { data } = await removeComment({
        variables: {
          postId,
          commentId: event._id },
      });
    } catch (err) {
      console.log(err);
    }}
  };
  
  const post = data?.post || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="singlePostCard my-3">
      <div className='singleCard'>
      <Link to={`/profile/${post.postAuthor}`}>
          <img src={post.image} />
        </Link>
        <div className='singlePostContent'>

          <h3 className="card-header bg-dark text-light p-2 m-0">
          {(Auth.getProfile().authenticatedPerson.username == post.postAuthor) ? (
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
                  {/* {post.postAuthor} made this post on {post.createdAt} */}
                </span>
              </>                
              )}

          </h3>

          <div className="singlePostCap bg-light py-4">
              {post.description}
          </div>

          <div className='timeStamp'>
            Posted at: {post.createdAt}
          </div>
        </div>
      </div>

      <div className='commentContain'>
        <div className="my-5">
          <CommentList
          comments={post.comments}
          handleRemoveComment={handleRemoveComment}
          />
        </div>
        <div className="m-3 p-4">
          <CommentForm postId={post._id} />
        </div>
      </div>

    </div>
  );
};

export default SinglePost;
