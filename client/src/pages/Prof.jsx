import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Prof = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || {};
  {console.log(`Auth: ${Auth.getProfile().authenticatedPerson.username}`)}
  {console.log(`userParam: ${userParam}`)}
  {console.log(`user: ${JSON.stringify(user)}`)}
  {console.log(`data: ${JSON.stringify(data)}`)}
  {console.log(`post: ${user.post}`)}
  {console.log(`me: ${user.username}`)}
  if (
    Auth.loggedIn() && 
    /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username, and compare it to the userParam variable */
    Auth.getProfile().authenticatedPerson.username === userParam
  ) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       {/* alert(You must be logged in to view this); */}
  //       <div>You must be logged in to view this</div>
  //       {console.log(Auth.getProfile().authenticatedPerson.username)}
  //       {console.log(userParam)}
  //       {/* <Navigate to='/login'/> */}
  //     </h4>
  //   )
  // }

  return (
    // <>
    //   <ul>
    //     {user.posts.map((post) => (
    //       <li key={user.post._id} className="my-2">
    //         <h3 className="profile">{user.username}</h3>
    //         <img alt={user.post.description} src={user.post.image} />
    //         <p>{user.post.description}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </>
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <PostList
            posts={user.posts}
            showUsername={Auth.getProfile().authenticatedPerson.username === user.username}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <PostForm />
          </div>
        )}
      </div>
    </div>
  );
};



export default Prof;