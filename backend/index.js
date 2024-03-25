const express = require("express");
const cors = require("cors");
const mongoConnect = require("./db");
require("dotenv").config();

const port = process.env.PORT || 8002;

//Mongo Connection
mongoConnect();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Bitches");
});

//SERVER
app.listen(port, () => {
  console.log("Running on Port:" + port);
});
