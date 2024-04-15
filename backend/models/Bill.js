const mongoose = require("mongoose");

// Schema
const billSchema = new mongoose.Schema({
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
billSchema.methods.calculateBill = function () {
  const { price, mealLogs } = this;
  let breakfastBill = 0;
  let lunchBill = 0;
  let dinnerBill = 0;

  const currentDate = new Date();

  const day = currentDate.getDate();

  for (let i = 0; i < day; i++) {
    for (let j = 1; j < 4; j++) {
      if (j === 1) breakfastBill += mealLogs[i][j] * price.breakfast;
      else if (j === 2) lunchBill += mealLogs[i][j] * price.lunch;
      else if (j === 3) dinnerBill += mealLogs[i][j] * price.dinner;
    }
    if (mealLogs[i][0] === 6) lunchBill += mealLogs[i][2] * price.lunch;
  }

  const hours = currentDate.getHours();

  if (hours > 10 && hours < 14) {
    breakfastBill += mealLogs[day][1] * price.breakfast;
  } else if (hours > 14 && hours < 22) {
    breakfastBill += mealLogs[day][1] * price.breakfast;
    lunchBill += mealLogs[day][2] * price.lunch;
  } else {
    breakfastBill += mealLogs[day][1] * price.breakfast;
    lunchBill += mealLogs[day][2] * price.lunch;
    dinnerBill += mealLogs[day][3] * price.dinner;
  }

  if (mealLogs[day][0] === 6) lunchBill += mealLogs[day][2] * price.lunch;

  const totalBill = breakfastBill + lunchBill + dinnerBill;

  return {
    breakfastBill,
    lunchBill,
    dinnerBill,
    totalBill,
  };
};

const billModel = mongoose.model("Bill", billSchema);
module.exports = billModel;
