import React, { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [posts, setPosts] = useState([]);

  // Dummy posts data for each category
  const categoryPosts = {
    food: [
      { title: "Food Post 1", description: "Description of Food Post 1." },
      { title: "Food Post 2", description: "Description of Food Post 2." },
    ],
    travel: [
      { title: "Travel Post 1", description: "Description of Travel Post 1." },
      { title: "Travel Post 2", description: "Description of Travel Post 2." },
    ],
    technology: [
      { title: "Tech Post 1", description: "Description of Tech Post 1." },
      { title: "Tech Post 2", description: "Description of Tech Post 2." },
    ],
  };

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPosts(categoryPosts[category] || []); // Set posts based on the selected category
  };
  return (
    <div className="home-page">
      <div className="hero">
        <h2 className="slogan fw-bold">Level Up your Life...</h2>
        <button className="create-button">
          <b style={{ fontSize: "1.3rem" }}>Create Post</b>
        </button>
      </div>
      <div className="categories">
        <h2>Explore Categories</h2>
        <div className="category-options-container">
          <button
            className="category-option"
            onClick={() => handleCategoryClick("food")}
          >
            Food
          </button>
          <button
            className="category-option"
            onClick={() => handleCategoryClick("travel")}
          >
            Travel
          </button>
          <button
            className="category-option"
            onClick={() => handleCategoryClick("technology")}
          >
            Technology
          </button>
          <button
            className="category-option"
            onClick={() => handleCategoryClick("Science")}
          >
            Science
          </button>
          <button
            className="category-option"
            onClick={() => handleCategoryClick("Life")}
          >
            Life
          </button>
          <button
            className="category-option"
            onClick={() => handleCategoryClick("Programming")}
          >
            Programming
          </button>
          <button
            className="category-option"
            onClick={() => handleCategoryClick("Productivity")}
          >
            Productivity
          </button>
          {/* Add more category buttons as needed */}
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
