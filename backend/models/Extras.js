const mongoose = require("mongoose");

// Schema
const extrasSchema = new mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  dish: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  takenDuring: {
    type: String,
    enum: ["breakfast", "lunch", "dinner"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  }
  //Paid or Not as type:boolean later?
});

const extrasModel = mongoose.model("Extras", extrasSchema);
module.exports = extrasModel;
