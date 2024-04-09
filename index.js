const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
// const upload = require("express-fileupload");
const createFile = require("./config/file");
// var path = require("path");
const dbConnect = require("./config/connect");
require("dotenv").config();
const app = express();
dbConnect();
createFile();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
console.log("123123");

app.use("/", (req, res, next) => {
  res.json("preasdasd");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server run in port ${5000}`));
