const mongoose = require("mongoose");

const dbConnect = async () => {
  //   console.log(process.env);
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connectied successfully");
  } catch (err) {
    console.log("DB NOT connected: " + err.message);
  }
};

dbConnect();
