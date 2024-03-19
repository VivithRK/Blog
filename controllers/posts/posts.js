const createCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "POst created",
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
