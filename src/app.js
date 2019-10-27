const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRoute = require("./routes/user");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.use("/user", userRoute);

module.exports = app;
