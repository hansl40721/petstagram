import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';

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