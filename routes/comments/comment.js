const express = require("express");
const {
  updateCtrl,
  singleCtrl,
  deleteCtrl,
  createCtrl,
} = require("../../controllers/comments/comments");
const commentRoutes = express.Router();

// post/api/v1/comment
commentRoutes.post("/", createCtrl);

// get/api/v1/posts/:id
commentRoutes.get("/:id", singleCtrl);

// delete/api/v1/posts/:id
commentRoutes.delete("/:id", deleteCtrl);

// put/api/v1/posts/:id
commentRoutes.put("/:id", updateCtrl);

module.exports = commentRoutes;
