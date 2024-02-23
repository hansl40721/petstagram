import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import PostList from '../components/PostList';
import { QUERY_USER } from '../utils/queries'
import Auth from '../utils/auth'

const Prof = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });
  
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

    <div className='profile'>This is our profile</div>
} 



export default Prof;