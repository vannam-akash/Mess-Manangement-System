const mongoose = require("mongoose");
const Student = require("./models/Student");
const Mess = require("./models/Mess");
const Staff = require("./models/Staff");
const { studs, messes, staffs } = require("./seeds");
const { seedFunc } = require("./utils/seedFunc");

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://" +
        process.env.MONGO_USERNAME +
        ":" +
        process.env.MONGO_PASSWORD +
        "@cluster0.kvbyjp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Successfully connected to MongoDB!");
    // seedFunc();
  } catch (err) {
    console.error("Error while connecting to MongoDB:", err);
  }
};

module.exports = mongoConnect;
