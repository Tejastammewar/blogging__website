import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Update.css";
function Update() {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:9002/getblog/" + id)
      .then((result) => {
        console.log(result);
        setTitle(result.data.title);
        setContent(result.data.content);
      })

      .catch((err) => console.log(err));
  }, []);
  const Updatee = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:9002/update/" + id, { title, content })
      .then((result) => {
        console.log(result);
        navigate("/blog");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="create-post-page">
        <form onSubmit={Updatee}>
          <h2>Update Blog </h2>
          <div>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              placeholder="Enter title of Blog "
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              cols="200"
              rows="10"
              placeholder="Enter the content of blog "
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
