import React from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" Component={ForgotPassword} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
