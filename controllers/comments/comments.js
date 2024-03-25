const User = require("../../models/users/User");
const Post = require("../../models/posts/Post");
const Comment = require("../../models/comment/Comment");
const appErr = require("../../utils/appErr");

// *create
const createCtrl = async (req, res) => {
  const { message } = req.body;
  try {
    // *find the post
    const post = await Post.findById(req.params.id);
    // *create  the comment
    const user = await User.findById(req.session.userAuth);
    const comment = await Comment.create({
      message,
      user: req.session.userAuth,
    });
    post.comment.push(comment._id);
    // *find by user
    user.comment.push(comment._id);

    // *disable validation
    // *save
    await post.save({ validateBeforeSave: false });
    await user.save({ validateBeforeSave: false });
    res.json({
      status: "Success",
      data: comment,
    });
  } catch (err) {
    res.json(err);
  }
};

const deleteCtrl = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.user.toString() !== req.session.userAuth.toString()) {
      return next(appErr("You are not allowed to delete others comment", 403));
    }
    // *delete post
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.json({
      status: "Success",
      user: "Comment has been deleted successfully",
    });
  } catch (err) {
    next(appErr(err.message));
  }
};
const singleCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "SIngle Comment",
    });
  } catch (err) {
    res.json(err);
  }
};
const updateCtrl = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    console.log(comment);
    if (!comment) {
      return next(appErr("Comment not found"));
    }
    if (comment.user.toString() !== req.session.userAuth) {
      // console.log("this comment is not yours");
      return next(appErr("U arent th ecomment owner to update"));
    }
    console.log(comment);
    // *update boi
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        message: req.body.message,
      },
      { new: true }
    );
    res.json({
      status: "Success",
      data: updatedComment,
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = { updateCtrl, singleCtrl, deleteCtrl, createCtrl };
