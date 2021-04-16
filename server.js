const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/tutorial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Successfully conntected to Mongo DB");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/home", (req, res) => {
  res.send("Hello from home");
});

app.listen(port, () => {
  console.log(`Running the server on the port ${port}`);
});
