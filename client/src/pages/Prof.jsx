import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import { QUERY_USER } from '../utils/queries'
import Auth from '../utils/auth'

// const Prof = () => {
//     const { username: userParam } = useParams();

//     const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//         variables: { username: userParam },
//     });
  
//     const user = data?.me || data?.user || {};
//     if (
//         Auth.loggedIn() &&
//         Auth.getProfile().authenticatedPerson.username === userParam
//     ) {
//         return <Navigate to='/me' />;
//     }

//     if (loading) {
//         return <div>Loading..</div>;
//     }

//     if (!user?.username) {
//         return (
//             alert("You need to be logged in to see this."),
//             <Navigate to='/login' />
//         )
//     }

//     <div className='profile'>This is our profile</div>
// } 

function RenderPost() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>
        <div className='container my-1'>

            {user ? (
                <>
                {user.post.map(({image, description}) => (
                    <div>
                    <ul>
                    <div key={post.id} className='card my-2'>
                        <p>{image}</p>
                        <p>{description}</p>
                    </div>
                    </ul>
                    </div>
                ))}
                </>
            ) : null}
        </div>
        </>
    );
}



export default RenderPost;