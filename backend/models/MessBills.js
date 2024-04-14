const mongoose = require("mongoose");

// Schema
const messBillSchema = new mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  price: {
    breakfast: {
      type: Number,
      default: 22.85, // Default price for breakfast
    },
    lunch: {
      type: Number,
      default: 45.71, // Default price for lunch
    },
    dinner: {
      type: Number,
      default: 45.71, // Default price for dinner
    },
  },
  mealLogs: {
    type: [[Number]],
    default: () => {
      const currentDate = new Date();
      const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate();
      const meals = 4;
      const mealLogsArray = [];
      for (let i = 0; i < daysInMonth; i++) {
        mealLogsArray[i] = [];

        for (let j = 0; j < meals; j++) {
          if (j === 0) {
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              i + 1
            );

            mealLogsArray[i][j] = date.getDay();
          } else {
            mealLogsArray[i][j] = 1;
          }

          if (j === 3 && mealLogsArray[i][0] === 6) {
            mealLogsArray[i][j] = 0;
          }
        }
      }
      return mealLogsArray;
    },
  },
});

// Calculate bill for each meal based on mealLogs
messBillSchema.methods.calculateBill = function () {
  const { price, mealLogs } = this;
  let breakfastBill = 0;
  let lunchBill = 0;
  let dinnerBill = 0;

  const currentDate = new Date();

  const day = currentDate.getDate();

  for (let i = 0; i <= day; i++) {
    for (let j = 1; j < 4; j++) {
      if (mealLogs[i][j]) breakfastBill += price.breakfast;
      if (mealLogs[i][j]) lunchBill += price.lunchBill;
      if (mealLogs[i][j]) dinnerBill += price.dinnerBill;
    }
    if (mealLogs[i][0] === 6) lunchBill += price.lunchBill;
  }

  const totalBill = breakfastBill + lunchBill + dinnerBill;

  return {
    breakfastBill,
    lunchBill,
    dinnerBill,
    totalBill,
  };
};

const messBillModel = mongoose.model("MessBill", messBillSchema);
module.exports = messBillModel;
