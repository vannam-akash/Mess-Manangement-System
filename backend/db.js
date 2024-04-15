const mongoose = require("mongoose");
const Student = require("./models/Student");
const Mess = require("./models/Mess");
const Staff = require("./models/Staff");
const { studs, messes, staffs } = require("./seeds");

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://" +
        process.env.MONGO_USERNAME +
        ":" +
        process.env.MONGO_PASSWORD +
        "@cluster0.kvbyjp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Successfully connected to MongoDB!");
    const db = mongoose.connection;

    // db.once("open", async () => {
    //   try {
    // Insert seed data into the collection
    // await db.dropDatabase();
    // await Student.insertMany(studs);
    // await Mess.insertMany(messes);
    // await Staff.insertMany(staffs);
    // console.log("Student, Mess, Staff data inserted successfully");
    //   } catch (err) {
    //     console.error("Error seeding student data:", err);
    //   } finally {
    // Close the connection
    //     mongoose.disconnect();
    //   }
    // });
  } catch (err) {
    console.error("Error while connecting to MongoDB:", err);
  }
};

module.exports = mongoConnect;
