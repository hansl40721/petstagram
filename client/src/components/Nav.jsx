import React from "react"
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "../styles/Component.css";

const styles = {
    link: {
        textDecoration: "inherit",
    }
}

const Nav = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (  
    <div className="nav">
        <Link to ='/'>
        <div className="navTitle" style={styles.link}>Petstagram</div>
        </Link>
        <div className="navLogo">
            <i className="fa-solid fa-paw"></i> 
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                {Auth.getProfile().authenticatedPerson.username}
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
    </div>

    );
}

export default Nav