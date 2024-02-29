import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from '../utils/mutations';
import { QUERY_SINGLE_POST } from '../utils/queries';
import bubbleTail from "../assets/bubble-tail.png"
import Auth from "../utils/auth"

const CommentList = ({
  comments = [],
  handleRemoveComment,
}) => {
//   const [removeComment, { error }] = useMutation(
//     REMOVE_COMMENT, 
//     {
//       refetchQueries: [
//         QUERY_SINGLE_POST,
//         'getSinglePost'
//       ]
//     }
//     );

//   const handleRemoveComment = async () => {
//     try {
//       const { data } = await removeComment({
//         variables: {
//           postId,
//           commentId
//         },
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3 className="p-5 display-inline-block">
        Comments
      </h3>

      <div className="commentCard flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="commentContent p-3 bg-dark text-light">
                <h5 className="card-header">
                  {comment.commentAuthor} commented on {comment.createdAt}:
                </h5>
                <p className="card-body">{comment.commentText}</p>
                <button onClick={() => {handleRemoveComment(comment)}} style={{display: comment.commentAuthor === Auth.getProfile().authenticatedPerson.username? "show": "none"}} className="fas fa-trash-alt text-danger delete-comment" />
              </div>
              <img src={bubbleTail}/>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
