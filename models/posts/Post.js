const mongoose = require("mongoose");

// * Schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["react js", "js", "html", "css", "node js", "other"],
    },
    image: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// * timestamps are used to automatically updated when the document was created

// *compile the schema to form a model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
