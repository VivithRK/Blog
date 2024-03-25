require("dotenv").config();
const express = require("express");
const session = require("express-session");
require("./config/dbconnect");
const globalErrHandler = require("./middlewares/globalHandler");
const MongoStore = require("connect-mongo");
// dotenv.config();
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/post");
const commentRoutes = require("./routes/comments/comment");
const ejs = require("ejs");
const app = express();

// *session config
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.MONGO_URL,
      ttl: 24 * 60 * 60,
    }),
  })
);

// *middlewares
app.set("view engine", "ejs");
// *static files
app.use(express.static(__dirname + "/public"));
app.use(express.json());
// *routes

// *render home
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("users/login");
});
app.get("/profile", (req, res) => {
  res.render("users/profile");
});
app.get("/register", (req, res) => {
  res.render("users/register");
});
app.get("/upload-profile-photo", (req, res) => {
  res.render("users/uploadProfilePhoto");
});
app.get("/upload-cover-photo", (req, res) => {
  res.render("users/uploadCoverPhoto");
});

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
