const mongoose = require("mongoose");

// * Schema
const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// * timestamps are used to automatically updated when the document was created

// *compile the schema to form a model
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
