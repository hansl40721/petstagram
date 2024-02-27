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
    <>
    <img src="https://res.cloudinary.com/dcjz6vl08/image/upload/c_fill,g_face,h_300,w_300/r_max/f_auto/v1708660066/myyshfx2ro3jtks99l4.jpg" />
    <div className="footer">
        <p>Copyright Chinchilla Group 2024</p>
    </div>
    </>
    );
}

export default Homepage;