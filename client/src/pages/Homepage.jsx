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
    <img />
    <div className="footer">
        <p>Copyright Chinchilla Group 2024</p>
    </div>
    </>
    );
}

export default Homepage;