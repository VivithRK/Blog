require("dotenv").config();
const express = require("express");
require("./config/dbconnect");
const globalErrHandler = require("./middlewares/globalHandler");
// dotenv.config();
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/post");
const commentRoutes = require("./routes/comments/comment");
const app = express();

// *middlewares
app.use(express.json());
// *routes
// ?--------
// ?user route
// ?--------

app.use("/api/v1/users", userRoutes);
// !this is a middleware

// ?--------
// ?post route
// ?--------
// post/api/v1/posts

app.use("/api/v1/posts", postRoutes);

// ?--------
// ?comment route
// ?--------

app.use("/api/v1/comments", commentRoutes);

// *error handler middlewares

app.use(globalErrHandler);

// *listen server

const port = process.env.port || 9000;
app.listen(port, console.log("Server is running on port " + port));
