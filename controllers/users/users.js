const User = require("../../models/users/User");

const registerCtrl = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    // *check if the user exists(email)
    const userFound = await User.findOne({ email });
    // *throw if exists
    if (userFound) {
      return res.json({ status: "Failed", data: "User Already exists" });
    }
    // *hash password

    // *register user
    const user = await User.create({ fullname, email, password });
    res.json({
      status: "Success",
      user: user,
    });
  } catch (err) {
    res.json(err);
  }
};

const loginCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User registered",
    });
  } catch (err) {
    res.json(err);
  }
};
const singleUserCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Single User Details",
    });
  } catch (err) {
    res.json(err);
  }
};

const singleUserProfCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Single User profile details",
    });
  } catch (err) {
    res.json(err);
  }
};
const picUploadCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "profile photo uploaded",
    });
  } catch (err) {
    res.json(err);
  }
};
const cvUploadCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "cover photo uploaded",
    });
  } catch (err) {
    res.json(err);
  }
};
const logoutCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Logged out",
    });
  } catch (err) {
    res.json(err);
  }
};
module.exports = {
  registerCtrl,
  singleUserCtrl,
  loginCtrl,
  singleUserProfCtrl,
  picUploadCtrl,
  cvUploadCtrl,
  logoutCtrl,
};
