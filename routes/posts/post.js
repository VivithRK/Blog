const express = require("express");
const {
  createCtrl,
  postsCtrl,
  updateCtrl,
  singlePostCtrl,
  deleteCtrl,
} = require("../../controllers/posts/posts");
const postRoutes = express.Router();

const protected = require("../../middlewares/protected");

postRoutes.post("/", protected, createCtrl);

// get/api/v1/posts/
postRoutes.get("/", postsCtrl);

// get/api/v1/posts/:id
postRoutes.get("/:id", singlePostCtrl);

// delete/api/v1/posts/:id
postRoutes.delete("/:id", deleteCtrl);

// put/api/v1/posts/:id
postRoutes.put("/:id", updateCtrl);

module.exports = postRoutes;
