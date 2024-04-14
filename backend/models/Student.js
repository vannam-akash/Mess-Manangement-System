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
    type: [[Number]],
    default: () => {
      const days = 30;
      const meals = 3;
      mealLogsArray = [];
      for (let i = 0; i < days; i++) {
        mealLogsArray[i] = [];

        for (let j = 0; j < meals; j++) {
          mealLogsArray[i][j] = -1;
        }
        
      }
      return mealLogsArray;
    },
  },
});

const studentModel = mongoose.model("Student", studentSchema);
module.exports = studentModel;
