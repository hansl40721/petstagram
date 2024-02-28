import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import PostList from '../components/PostList';
import { QUERY_USER } from '../utils/queries'
import Auth from '../utils/auth'

const Prof = () => {
  const { username } = useParams();

  const { loading, data, error } = useQuery(QUERY_USER, {
    variables: { username }
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1>Error</h1>
  }

  if(!Auth.loggedIn()) {
    return(
      <>
        <div>You must be logged in to view this</div>
        <Navigate to='/login'/>
      </>
    )
  }

  if (Auth.getProfile().authenticatedPerson.username !== userParam) {
    return <div>You must be logged in to view this</div>
  }

  return (
    <>
      <ul>
        {user.posts.map((post) => (
          <li key={post._id} className="my-2">
            <h3 className="profile">{post.username}</h3>
            <img alt={post.description} src={post.image} />
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};



export default Prof;