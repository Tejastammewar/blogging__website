import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9002")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9002/deleteblog/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  return (
    <div className="update-container">
      <div className="header">
        <h2 className="latest-post">Latest Posts</h2>
        <Link to="/Create" className="btn btn-success">
          Add New
        </Link>
      </div>
      <div className="post-list">
        {users.map((user) => (
          <div key={user._id} className="post-card">
            <h3 className="post-title">{user.title}</h3>

            <div className="post-actions">
              <Link to={`/update/${user._id}`} className="btn btn-update">
                Update
              </Link>
              <button
                className="btn btn-delete"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
