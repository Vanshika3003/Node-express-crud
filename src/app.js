require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
//const router = require("./routes/routes");
//const { connectDb } = require("./db/init");
app.use(
  cors({
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/", router);
module.exports = app;
