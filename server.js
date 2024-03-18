require("dotenv").config();
const express = require("express");
require("./config/dbconnect");
// dotenv.config();
const app = express();

// *middlewares
// *routes
// ?--------
// ?user route
// ?--------

// post/api/v1/users/register
app.post("/api/v1/users/register", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User registered",
    });
  } catch (err) {
    res.json(err);
  }
});

// post/api/v1/users/login
app.post("/api/v1/users/login", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User registered",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET/api/v1/users/:id
app.get("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Single User Details",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET/api/v1/users/:id
app.get("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Single User profile details",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET/api/v1/users/:id
app.put("/api/v1/users/profile-photo-upload/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "profile photo uploaded",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET/api/v1/users/:id
app.put("/api/v1/users/cover-photo-upload/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "cover photo uploaded",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET/api/v1/users/logoout
app.get("/api/v1/users/logout", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Logged out",
    });
  } catch (err) {
    res.json(err);
  }
});

// ?--------
// ?post route
// ?--------
// post/api/v1/posts
app.post("/api/v1/posts", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "POst created",
    });
  } catch (err) {
    res.json(err);
  }
});

// get/api/v1/posts/
app.get("/api/v1/posts", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "All Posts",
    });
  } catch (err) {
    res.json(err);
  }
});

// get/api/v1/posts/:id
app.get("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Single Posts",
    });
  } catch (err) {
    res.json(err);
  }
});

// delete/api/v1/posts/:id
app.delete("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post deleted",
    });
  } catch (err) {
    res.json(err);
  }
});

// put/api/v1/posts/:id
app.put("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Updated",
    });
  } catch (err) {
    res.json(err);
  }
});
// ?--------
// ?comment route
// ?--------

// post/api/v1/comment
app.post("/api/v1/comments", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment created",
    });
  } catch (err) {
    res.json(err);
  }
});

// get/api/v1/posts/:id
app.get("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "SIngle Comment",
    });
  } catch (err) {
    res.json(err);
  }
});

// delete/api/v1/posts/:id
app.delete("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment deleted",
    });
  } catch (err) {
    res.json(err);
  }
});

// put/api/v1/posts/:id
app.put("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Updated",
    });
  } catch (err) {
    res.json(err);
  }
});
// *error handler middlewares
// *listen server

const port = process.env.port || 9000;
app.listen(port, console.log("Server is running on port " + port));
