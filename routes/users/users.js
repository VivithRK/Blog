const express = require("express");
const {
  registerCtrl,
  singleUserCtrl,
  loginCtrl,
  singleUserProfCtrl,
  picUploadCtrl,
  cvUploadCtrl,
  logoutCtrl,
} = require("../../controllers/users/users");
const userRoutes = express.Router();

// *Register

userRoutes.post("/register", registerCtrl);

// post/api/v1/users/login
userRoutes.post("/login", loginCtrl);

// GET/api/v1/users/:id
userRoutes.get("/:id", singleUserCtrl);

// GETusers/:id
userRoutes.get("/profile/:id", singleUserProfCtrl);

// GET/:id
userRoutes.put("/profile-photo-upload/:id", picUploadCtrl);

// GET/:id
userRoutes.put("/cover-photo-upload/:id", cvUploadCtrl);

// GET/logoout
userRoutes.get("/logout", logoutCtrl);

module.exports = userRoutes;
