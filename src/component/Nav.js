import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Nav(props) {
    const navSytle={
        color:'write'
    };
    return (
        <div className="nav">
            <Link style={navSytle} to="/">
            <h3>Logo</h3>
            </Link>
            

            <ul className="nav-click">
                <Link style={navSytle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navSytle} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;