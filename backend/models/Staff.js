const mongoose = require("mongoose");

//SCHEMA
const staffSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  messEnrolled: {
    type: mongoose.Types.ObjectId,
    ref: "Mess",
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  hostel: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    private: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const staffModel = mongoose.model("Staff", staffSchema);
module.exports = staffModel;
