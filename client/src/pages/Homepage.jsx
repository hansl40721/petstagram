import { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import "../styles/Pages.css"
import Nav from "../components/Nav";

const Homepage = () => {
    return (
    <div className="homepageContain">
        <div className="splashText">
            <h1>Welcome to Petstagram!</h1>
            <h2>The place to share your pet photos with other pet lovers</h2>
        </div>
        <div className="splashImage">
            <img src="../assets/image-from-rawpixel-id-6657881-jpeg(1)"/>
        </div>
        <div className="footer">
            <p>Copyright Chinchilla Group 2024</p>
        </div>
    </div>
    );
}

export default Homepage;