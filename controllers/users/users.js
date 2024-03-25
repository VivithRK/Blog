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

const loginCtrl = async (req, res, next) => {
  // console.log((req.session.loginUser = "EMma"));
  const { email, password } = req.body;
  if (!email || !password) {
    return next(appErr("Email and password are required."));
  }
  try {
    //* Check if the user exist
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return next(appErr("User not registered"));
    }
    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if (!isPasswordValid) {
      return next(appErr("Bad Password"));
    }
    // *Save the user into
    req.session.userAuth = userFound._id;
    console.log(req.session);
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
    // * get userId from params
    const userId = req.params.id;
    //* find the user
    const user = await User.findById(userId);
    res.json({
      status: "Success",
      user,
    });
  } catch (err) {
    res.json(err);
  }
};

const singleUserProfCtrl = async (req, res) => {
  try {
    console.log("am working");
    // *get the login user
    const userID = req.session.userAuth;
    // *find the user
    // console.log(userID);
    const user = await User.findById(userID)
      .populate("comment")
      .populate("posts");
    // console.log(user);

    res.json({
      status: "Success",
      user,
    });
  } catch (err) {
    res.json(err);
  }
};

const picUploadCtrl = async (req, res, next) => {
  console.log(req.file);
  try {
    const userID = req.session.userAuth;
    const userFound = await User.findById(userID);

    if (!userFound) {
      return res.json(next(appErr("Please login boss")));
    }
    const user = await User.findByIdAndUpdate(
      userID,
      {
        profileImage: req.file.path,
      },
      { new: true }
    );
    res.json({
      status: "Success",
      user: user,
    });
  } catch (err) {
    res.json(next(appErr(err.message)));
  }
};

const updateUserCtrl = async (req, res, next) => {
  const { fullname, email, password } = req.body;
  try {
    // * check if email is not taken
    if (email) {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) {
        return next(appErr("Email is taken", 400));
      }
    }

    // *Update the User
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { fullname, email },
      { new: true }
    );

    res.json({
      status: "Success",
      data: user,
    });
  } catch (err) {
    res.json(next(appErr(err)));
  }
};

const updatePswdCtrl = async (req, res, next) => {
  const { password } = req.body;
  try {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const passwordHashed = await bcrypt.hash(password, salt);
      await User.findByIdAndUpdate(req.params.id, {
        password: passwordHashed,
      });
    }

    res.json({
      status: "Success",
      user: "User password updated",
    });
  } catch (err) {
    res.json(next(appErr("Provide password field")));
  }
};

const cvUploadCtrl = async (req, res) => {
  console.log(req.file);
  try {
    const userID = req.session.userAuth;
    const userFound = await User.findById(userID);

    if (!userFound) {
      return res.json(next(appErr("Please login boss")));
    }
    const user = await User.findByIdAndUpdate(
      userID,
      {
        coverImage: req.file.path,
      },
      { new: true }
    );
    res.json({
      status: "Success",
      user: user,
    });
  } catch (err) {
    res.json(next(appErr(err.message)));
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
  updateUserCtrl,
  updatePswdCtrl,
};
