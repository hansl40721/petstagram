import React from "react"
import { Link } from 'react-router-dom';
import "../styles/Component.css";

const Nav = () => {
    return (  
    <div className="nav">
        <Link to ='/'>
        <div className="navTitle">Petstagram</div>
        </Link>
        <div className="navLogo">
            <img src="https://external-preview.redd.it/lMYOFfQzicq49A6sq6mlOjHiRX0EkyoeyTe96wCVfrw.jpg?auto=webp&s=bae5b19f45be662c9005b79f90656bafd8540d34"/>
        </div>
        <Link to= '/profile'>
            Username
        </Link>
    </div>

    );
}

export default Nav