const User = require("../../models/users/User");
const Post = require("../../models/posts/Post");
const appErr = require("../../utils/appErr");

const createCtrl = async (req, res, next) => {
  const { title, description, category } = req.body;

  try {
    // *user
    const userId = req.session.userAuth;
    const userFound = await User.findById(userId);
    if (!title || !description || !category || !req.file) {
      return next(appErr("All fields should be added"));
    }
    // *Create Post
    const postCreated = await Post.create({
      title,
      description, // Use `desc` instead of `description`
      category,
      user: userId,
      image: req.file.path,
    });
    // * Push the post created into array of the users post
    userFound.posts.push(postCreated._id);
    // * re save
    await userFound.save();
    console.log(req.file);
    res.json({
      status: "Success",
      user: postCreated,
    });
  } catch (err) {
    res.json(err);
  }
};

const singlePostCtrl = async (req, res) => {
  try {
    const id = req.params.id;
    // *Find the posts
    const post = await Post.findById(id);

    res.json({
      status: "Success",
      data: post,
    });
  } catch (err) {
    next(appErr(error.message));
  }
};

const postsCtrl = async (req, res) => {
  try {
    const posts = await Post.find();

    res.json({
      status: "Success",
      data: posts,
    });
  } catch (err) {
    res.json(err);
  }
};

const deleteCtrl = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.user.toString() !== req.session.userAuth.toString()) {
      return next(appErr("You are not allowed to delete others post"));
    }
    // *delete post
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.json({
      status: "Success",
      user: "Post has been deleted successfully",
    });
  } catch (err) {
    next(appErr(err.message));
  }
};
const updateCtrl = async (req, res, next) => {
  const { title, description, category } = req.body;
  if (!title || !description || !category || !req.file) {
    return next(appErr("All fields should be added"));
  }
  try {
    const post = await Post.findById(req.params.id);
    if (post.user.toString() !== req.session.userAuth) {
      return next(appErr("You cant update"));
    }
    // *update boi
    const updatedPost = Post.findByIdAndUpdate(
      req.params.id,
      {
        category,
        title,
        description,
        image: req.file.path,
      },
      { new: true }
    );
    res.json({
      status: "Success",
      data: updatedPost,
    });
  } catch (err) {
    res.json(err);
  }
};
module.exports = {
  createCtrl,
  postsCtrl,
  updateCtrl,
  singlePostCtrl,
  deleteCtrl,
};
