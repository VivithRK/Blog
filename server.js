const express = require("express");

const app = express();

// *middlewares
// *routes
// *error handler middlewares
// *listen server

const port = process.env.port || 9000;
app.listen(port, console.log("Server is running on port " + port));
