import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import PostList from '../components/PostList';
import { QUERY_USER } from '../utils/queries'
import Auth from '../utils/auth'

const Prof = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER);
  
    const user = data?.me || data?.user || {};
    if (
        Auth.loggedIn() &&
        Auth.getProfile().authenticatedPerson.username === userParam
    ) {
        return <Navigate to='/me' />;
    }

    if (loading) {
        return <div>Loading..</div>;
    }

    if (!user?.username) {
        return (
            alert("You need to be logged in to see this."),
            <Navigate to='/login' />
        )
    }

    // post.map function
    return (
        <>
          {user.posts.map((post) => (
            <div key={post._id} className="my-2">
              <h3 className="profile">{post.username}</h3>
              <img alt={post.description} src={post.image} />
              <p>{post.description}</p>
            </div>
          ))}
        </>
      );
    };



export default Prof;