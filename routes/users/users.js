const express = require("express");
const multer = require("multer");
const {
  registerCtrl,
  singleUserCtrl,
  loginCtrl,
  singleUserProfCtrl,
  picUploadCtrl,
  cvUploadCtrl,
  logoutCtrl,
  updateUserCtrl,
  updatePswdCtrl,
} = require("../../controllers/users/users");
const protected = require("../../middlewares/protected");
const storage = require("../../config/cloudinary");

//* instance of a multer
const upload = multer({ storage });
console.log(upload);
const userRoutes = express.Router();

console.log(process.env.CLOUDINARY_SECRET_KEY);
// *Register

userRoutes.post("/register", registerCtrl);

// post/api/v1/users/login
userRoutes.post("/login", loginCtrl);

// GETusers/:id
userRoutes.get("/profile", protected, singleUserProfCtrl);

// GET/:id
userRoutes.put(
  "/profile-photo-upload",
  protected,
  upload.single("profile"),
  picUploadCtrl
);

// GET/:id
userRoutes.put("/cover-photo-upload/:id", cvUploadCtrl);

userRoutes.put("/update/:id", updateUserCtrl);
userRoutes.put("/update-password/:id", updatePswdCtrl);

// GET/api/v1/users/:id
userRoutes.get("/:id", singleUserCtrl);

// GET/logoout
userRoutes.get("/logout", logoutCtrl);

module.exports = userRoutes;
