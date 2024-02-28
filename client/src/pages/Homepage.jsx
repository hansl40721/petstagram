import { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import "../styles/Pages.css"
import Nav from "../components/Nav";
import pic1 from "../assets/image-from-rawpixel-id-6657881-jpeg(1).png"
import pic2 from "../assets/image-from-rawpixel-id-6669182-jpeg.png"

const Homepage = () => {
    return (
    <div className="homepageContain">
        <div className="splashContain">
            <div className="splashText">
                <h1>Welcome to Petstagram!</h1>
                <h2>The place to share your pet photos with other pet lovers</h2>
                <div className='loginLink'>
                <Link to='/login'>
                        Login
                </Link>
                </div>
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