// import { useState } from "react";
// import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import { ADD_USER } from "../utils/mutations";
import { QUERY_POSTS } from '../utils/queries';
import Feed from '../components/Feed';
import Auth from '../utils/auth';
import "../styles/Pages.css"
// import Nav from "../components/Nav";
import pic1 from "../assets/image-from-rawpixel-id-6657881-jpeg(1).png"
import pic2 from "../assets/image-from-rawpixel-id-6669182-jpeg.png"
import { useQuery } from '@apollo/client';

const Homepage = () => {
    const { loading, data } = useQuery(QUERY_POSTS)
    const posts = data?.posts || [];
    if (Auth.loggedIn() === true) {
        return (
            <div className="homepageContain">
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="exploreHead col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Explore more Pets!
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <Feed
            posts={posts}
            title={`${posts.postAuthor}'s posts`}
          />
        </div>
      </div>
    </div>

            </div>
        )
    }
    return (
    <div className="homepageContain">
        <div className="splashContain">
            <div className="splashText">
                <h1>Welcome to Petstagram!</h1>
                <h2>The place to share your pet photos with other pet lovers</h2>
                { !Auth.loggedIn() ? ( <div className='loginLink'>
                <Link to='/signup'>
                        Sign Up
                </Link>
                </div>
                ) : (<div className='loginLink'>
                <Link to='/me'>
                        Go To Profile
                </Link>
                </div>)
                }
            </div>

            <div className="splashImage">
                <img id="splashPic1" src={pic1}/>
                <img id="splashPic2" src={pic2}/>
            </div>
        </div>


        <div className="footer">
            <p>Copyright Chinchilla Group 2024</p>
        </div>
    </div>
    );
}

export default Homepage;