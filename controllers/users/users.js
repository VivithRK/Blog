const User = require("../../models/users/User");
const bcrypt = require("bcrypt");
const appErr = require("../../utils/appErr");

const registerCtrl = async (req, res, next) => {
  const { fullname, email, password } = req.body;
  // check if field is empty
  if (!fullname || !email || !password) {
    return next(appErr("All fields are required.."));
  }
  try {
    // *check if the user exists(email)
    const userFound = await User.findOne({ email });
    // *throw if exists
    if (userFound) {
      return next(appErr("User Already exists"));
      // return res.json({ status: "Failed", data:  });
    }
    // *hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    // *register user
    const user = await User.create({
      fullname,
      email,
      password: passwordHashed,
    });
    res.json({
      status: "Success",
      user: user,
    });
  } catch (err) {
    res.json(err);
  }
};

const loginCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {
    //* Check if the user exist
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.json({
        status: "Failed",
        user: "User not registered",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if (!isPasswordValid) {
      return res.json({
        status: "Failed",
        user: "Bad Password",
      });
    }
    res.json({
      status: "Success",
      user: userFound,
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
