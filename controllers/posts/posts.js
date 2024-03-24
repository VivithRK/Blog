const User = require("../../models/users/User");
const Post = require("../../models/posts/Post");

const createCtrl = async (req, res) => {
  const { title, desc, category } = req.body;

  try {
    // *user
    const userId = req.session.userAuth;
    const userFound = await User.findById(userId);

    // *Create Post
    const postCreated = await Post.create({
      title,
      description: desc, // Use `desc` instead of `description`
      category,
      user: userId,
    });
    // * Push the post created into array of the users post
    userFound.posts.push(postCreated._id);
    // * re save
    await userFound.save();

    res.json({
      status: "Success",
      user: postCreated,
    });
  } catch (err) {
    res.json(err);
  }
};

const postsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "All Posts",
    });
  } catch (err) {
    res.json(err);
  }
};
const singlePostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Single Posts",
    });
  } catch (err) {
    res.json(err);
  }
};
const deleteCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post deleted",
    });
  } catch (err) {
    res.json(err);
  }
};
const updateCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Updated",
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
