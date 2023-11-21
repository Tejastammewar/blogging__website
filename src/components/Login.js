import React, { useState, useEffect } from "react";
import "./Login.css";
import email_icon from "./email.jpg";
import password_icon from "./password.jpg";
import backgroundImage from "./nice.jpg";
import person_icon from "./person.jpg";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/; // Basic email format validation
    if (!emailRegex.test(email)) {
      return "Email is invalid";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (password.length < 9) {
      return "Password must be at least 9 characters long";
    }

    const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/;
    if (!specialCharRegex.test(password)) {
      return "Password must contain at least one special character";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    let errorMessage = "";
    switch (name) {
      case "email":
        errorMessage = validateEmail(value);
        break;
      case "password":
        errorMessage = validatePassword(value);
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleSubmit = async () => {
    const { email, password } = formData;
    if (email && password) {
      axios
        .post("http://localhost:9002/login", formData)
        .then((res) => console.log(res));
    } else {
      alert("invalid input ");
    }

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      setErrors({
        email: formData.email.trim() === "" ? "Email is required" : "",
        password: formData.password.trim() === "" ? "Password is required" : "",
      });
      return;
    }

    setSuccess(true);
  };

  return (
    <div>
      <div className="background-image"></div>
      <div className="container">
        <img
          src={backgroundImage}
          alt="River"
          className="background-image"
        ></img>

        <div className="header">
          <div className="text fw-bold">Login</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="error-message">{errors.email}</div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="error-message">{errors.password}</div>

          <div className="submit-container">
            <button type="button" onClick={handleSubmit} className="submit">
              LOGIN
            </button>
          </div>
        </div>

        {success && <p className="success">Logged In Successfully.</p>}
        <a className="homelink" href="/Home">
          Got to home
        </a>
      </div>
    </div>
  );
};

export default SignUp;
