import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(null);

  // Dummy posts data for each category
  const categoryPosts = {
    food: [
      {
        title: "Quick Breakfast Ideas",
        description: "Oatmeal with Nut Butter and Banana",
      },

      {
        title: "Delicious Pasta Recipes",
        description:
          "Enjoy a classic spaghetti Bolognese with a rich and savory meat sauce. Top it with freshly grated Parmesan cheese for the perfect finish.",
      },
    ],
    travel: [
      { title: "Travel Post 1", description: "Description of Travel Post 1." },
      { title: "Travel Post 2", description: "Description of Travel Post 2." },
    ],
    technology: [
      { title: "Tech Post 1", description: "Description of Tech Post 1." },
      { title: "Tech Post 2", description: "Description of Tech Post 2." },
    ],
    Science: [
      {
        title: "Science Post 1",
        description: "Description of Science Post 1.",
      },
      {
        title: "Science Post 2",
        description: "Description of Science Post 2.",
      },
    ],
    Life: [
      {
        title: "Life Post 1",
        description: "Description of Life Post 1.",
      },
      {
        title: "Life Post 2",
        description: "Description of Life Post 2.",
      },
    ],
    Programming: [
      {
        title: "Programming Post 1",
        description: "Description of Programming Post 1.",
      },
      {
        title: "Programming Post 2",
        description: "Description of Programming Post 2.",
      },
    ],
  };

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPosts(categoryPosts[category] || []);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    alert(`Thank you for subscribing! We'll keep you updated.`);
    e.target.reset(); // Reset the form
  };

  return (
    <div className="home-page">
      <div className="hero">
        <h2 className="slogan fw-bold">Level Up your Life...</h2>
        <Link to="/blog" className="create-button">
          <b style={{ fontSize: "1.3rem" }}>Create Post</b>
        </Link>
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
        </div>
      </div>

      {/* Display posts based on selected category */}
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>

      <div className="newsletter">
        <h2 className="subsbtn">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && (
          <div className="custom-alert">
            {message}
            <span onClick={() => setMessage(null)}>&times;</span>
          </div>
        )}
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
