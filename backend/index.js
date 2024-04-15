require("dotenv").config();
const mongoConnect = require("./db");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const studentRoutes = require("./routes/student");
const staffRoutes = require("./routes/staff");
const extraRoutes = require("./routes/extra");
const billRoutes = require("./routes/bill");
require("./passport");

// Mongo Connection
mongoConnect();
const app = express();
const port = process.env.PORT || 8765;

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hey Hi!");
});

app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
app.use("/staffs", staffRoutes);
app.use("/bill", billRoutes);

// Server
app.listen(port, () => {
  console.log("Running on Port:" + port);
});
