import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h3><i><a href="/">Instagram</a></i></h3>
            </div>
            <div className="navbar-item">
                <div className="item">
                    <Link to="/">Home</Link>
                </div>
                <div className="item">
                    <Link to="/new">New Post</Link>
                </div>
                <div className="item">
                    <Link to="/profile">Profile</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;