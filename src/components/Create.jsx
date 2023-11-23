import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ".//Create.css";
function Create() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9002/createBlog", { title, content })
      .then((result) => {
        console.log(result);
        navigate("/blog");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <div className="create-post-page">
          <h1>Create a New Post</h1>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            placeholder="Enter title of Blog "
            id="postTitle"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">Content of blog </label>
          <textarea
            name=""
            id="postContent"
            cols="120"
            rows="10"
            placeholder="Enter the content of blog "
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button className="publishbutton">Publish</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
