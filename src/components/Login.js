import React, { useState, useEffect } from "react";
import "./Login.css";
import riverimage from "./nice.jpg";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rememberedUsers, setRememberedUsers] = useState([]);

  useEffect(() => {
    // Check if "Remember Me" was previously selected
    const rememberMeFromStorage = localStorage.getItem("rememberMe");
    if (rememberMeFromStorage === "true") {
      // Automatically set the "Remember Me" checkbox
      setRememberMe(true);
      // Retrieve remembered usernames from local storage
      const rememberedUsersFromStorage = JSON.parse(
        localStorage.getItem("rememberedUsers")
      );
      if (rememberedUsersFromStorage) {
        setRememberedUsers(rememberedUsersFromStorage);
      }
    }
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (username && password) {
      console.log(username, password);
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
        const updatedRememberedUsers = [...rememberedUsers, username];
        localStorage.setItem(
          "rememberedUsers",
          JSON.stringify(updatedRememberedUsers)
        );
      } else {
        localStorage.removeItem("rememberMe");
      }
      setUsername("");
      setPassword("");
      setSuccess(true);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>you are logged in!!!</h1>
          <br></br>
          <p>
            <a href="#">Got to home</a>
          </p>
        </section>
      ) : (
        <div className="login-box">
          <img src={riverimage} alt="RIverr" className="background-image"></img>
          <form className={formSubmitted ? "was-validated" : ""}>
            <div className="login-form was-validated">
              <p class="heading">Have an Account?</p>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                required
              ></input>
              {formSubmitted && !username && (
                <div className="invalid-feedback mb-3 mt-1 fw-bold">
                  Please enter your username
                </div>
              )}
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              ></input>
              {formSubmitted && !password && (
                <div className="invalid-feedback mb-3 mt-1 fw-bold">
                  Please enter your password
                </div>
              )}
              <button type="submit" onClick={handleSubmit}>
                SIGN IN
              </button>

              <div className="checkbox-container ">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="#">Remember me</label>

                <a href="/forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <p className="dont">
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "yellow" }}>
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default Login;
