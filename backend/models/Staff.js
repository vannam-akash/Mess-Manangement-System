const mongoose = require("mongoose");

// Schema
const staffSchema = new mongoose.Schema({
  messEnrolled: {
    type: mongoose.Types.ObjectId,
    ref: "Mess",
    required: true,
  },
  image: {
    type: String,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    private: true,
  },
});

const staffModel = mongoose.model("Staff", staffSchema);
module.exports = staffModel;
