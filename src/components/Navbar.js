import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          My Blog
        </Link>
        <ul className="nav-menuu">
          <li className="nav-item">
            <Link to="/Home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
          <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>

          {/* <li>
          <Link to="/create" className="nav-link">
              Create
            </Link>
          </li> */}

          <li>
          <Link to="/update" className="nav-link">
              Update 
            </Link>
          </li>



          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
