const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedParser);

// Connect to MongoDB with a single connection string
mongoose
  .connect("mongodb://127.0.0.1:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Define schema and model for "register" database
const UserSchema = new mongoose.Schema({
  name: String,
  phoneno: String,
  email: String,
  password: String,
  repassword: String,
});

const User = mongoose.model("User", UserSchema);

// Define schema and model for "crud" database
const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  // ... other fields
});

const Blog = mongoose.model("Blog", BlogSchema);

const port = 9002;

app.post("/register", async (req, res) => {
  const { name, phoneno, email, password, repassword } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.send({ message: "User already registered" });
    } else {
      const newUser = new User({
        name,
        phoneno,
        email,
        password,
        repassword,
      });

      await newUser.save();
      res.send({ message: "Successfully Registered" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      if (password === existingUser.password) {
        res.send({ message: "Login successful", user: existingUser });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/createBlog", (req, res) => {
  // Use the Blog model to create a new blog post
  Blog.create(req.body)
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  Blog.find({})
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
});

app.get("/getblog/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById({ _id: id })
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
});

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        content: req.body.content,
      },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/deleteblog/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete({ _id: id })
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log("Server is running");
});
