const express = require("express");
const multer = require("multer");
const storage = require("../../config/cloudinary");
const {
  createCtrl,
  postsCtrl,
  updateCtrl,
  singlePostCtrl,
  deleteCtrl,
} = require("../../controllers/posts/posts");

// *instance of the multer
const upload = multer({ storage });

const postRoutes = express.Router();

const protected = require("../../middlewares/protected");

postRoutes.post("/", protected, upload.single("file"), createCtrl);

// get/api/v1/posts/
postRoutes.get("/", postsCtrl);

// get/api/v1/posts/:id
postRoutes.get("/:id", singlePostCtrl);

// delete/api/v1/posts/:id
postRoutes.delete("/:id", protected, deleteCtrl);

// put/api/v1/posts/:id
postRoutes.put("/:id", protected, upload.single("file"), updateCtrl);

module.exports = postRoutes;
