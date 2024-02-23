import React from "react"
import { Link } from 'react-router-dom';
import "../styles/Component.css";

const styles = {
    link: {
        textDecoration: "inherit",
    }
}

const Nav = () => {
    return (  
    <div className="nav">
        <Link to ='/'>
        <div className="navTitle" style={styles.link}>Petstagram</div>
        </Link>
        <div className="navLogo">
            <i className="fa-solid fa-paw"></i> 
        </div>
        <Link to= '/profile'>
        <div className="navUser">Username</div>
        </Link>
    </div>

    );
}

export default Nav