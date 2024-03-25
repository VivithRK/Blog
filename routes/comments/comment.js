const express = require("express");
const {
  updateCtrl,
  singleCtrl,
  deleteCtrl,
  createCtrl,
} = require("../../controllers/comments/comments");
const protected = require("../../middlewares/protected");
const commentRoutes = express.Router();

// post/api/v1/comment
commentRoutes.post("/:id", protected, createCtrl);

// get/api/v1/posts/:id
commentRoutes.get("/:id", singleCtrl);

// delete/api/v1/posts/:id
commentRoutes.delete("/:id", protected, deleteCtrl);

// put/api/v1/posts/:id
commentRoutes.put("/:id", protected, updateCtrl);

module.exports = commentRoutes;
