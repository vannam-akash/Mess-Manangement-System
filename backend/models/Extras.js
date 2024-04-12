const mongoose = require("mongoose");

// Schema
const extrasSchema = new mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
    required: true
  },
  dish: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  paid: {
    type: Boolean,
    default: false,
    required: true
  }
});

const extrasModel = mongoose.model("Extras", extrasSchema);
module.exports = extrasModel;
