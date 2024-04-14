const mongoose = require("mongoose");

// Schema
const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    private: true,
  },
  hostel: {
    type: String,
    required: true,
  },
  messEnrolled: {
    type: mongoose.Types.ObjectId,
    ref: "Mess",
    default:null,
    // required: true,
  },
  extrasTaken: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Extras",
      required: false,
    },
  ],
  mealLogs: {
    type: mongoose.Types.ObjectId,
    ref: "MessBill",
  },
});

const studentModel = mongoose.model("Student", studentSchema);
module.exports = studentModel;
