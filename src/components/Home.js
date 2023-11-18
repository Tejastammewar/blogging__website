import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <h2 className="slogan fw-bold">Level Up your Life...</h2>
        <button className="create-button">
          <b style={{ fontSize: "1.3rem" }}>Create Post</b>
        </button>
      </div>
      <div className="categories">
        {/* Category 1 */}
        <div className="category">
          <h3>Category 1</h3>
          <p>Discover amazing content in Category 1.</p>
        </div>
        <div className="category">
          <h3>Category 2</h3>
          <p>Discover amazing content in Category 2.</p>
        </div>
        <div className="category">
          <h3>Category 3</h3>
          <p>Discover amazing content in Category 3.</p>
        </div>
      </div>

      {/* Popular Posts Section */}
      <div className="posts">
        {/* Post 1 */}
        <div className="post">
          <h3>Post Title 1</h3>
          <p>Short description of Post 1.</p>
        </div>
        <div className="post">
          <h3>Post Title 2</h3>
          <p>Short description of Post 2.</p>
        </div>
        <div className="post">
          <h3>Post Title 3</h3>
          <p>Short description of Post 2.</p>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      {/* Footer */}
      <div className="footer">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
        <p>&copy; 2023 My Blog</p>
      </div>
    </div>
  );
}

export default Home;
