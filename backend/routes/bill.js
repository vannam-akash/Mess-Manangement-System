const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const Bill = require("../models/Bill");
const passport = require("passport");

// Get bill from Id
router.get(
  "/:billId",
  passport.authenticate("student-jwt", { session: false }),
  async (req, res) => {
    try {
      const { billId } = req.params;

      const bill = await Bill.findById(billId);

      if (!bill) {
        return res
          .status(404)
          .json({ error: "Mess Bill not found for this student" });
      }

      return res.status(200).json(bill);
    } catch (error) {
      console.error("Error fetching bill for the student", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Get bill for a student from Id
router.get(
  "/:studentId/getBill",
  passport.authenticate("student-jwt", { session: false }),
  async (req, res) => {
    try {
      const { studentId } = req.params;

      const bill = await Bill.findOne({ student: studentId });

      if (!bill) {
        return res
          .status(404)
          .json({ error: "Mess Bill not found for this student" });
      }

      const { breakfastBill, lunchBill, dinnerBill } = bill.calculateBill();

      return res
        .status(200)
        .json({ bill, breakfastBill, lunchBill, dinnerBill });
    } catch (error) {
      console.error("Error fetching bill", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//Cancel a meal
router.post(
  "/:studentId/cancel",
  passport.authenticate("student-jwt", { session: false }),
  async (req, res) => {
    try {
      const { studentId } = req.params;
      const { date, mealType } = req.body;

      const bill = await Bill.findOne({ student: studentId });

      if (!bill) {
        return res
          .status(404)
          .json({ error: "Mess Bill not found for this student" });
      }

      // Date on which a meal is to be cancelled
      const { dd, mm, yyyy } = date.split("-");
      const cancelDate = new Date(yyyy, mm - 1, dd);
      const cancelDayOfMonth = cancelDate.getDate();
      const cancelMonth = cancelDate.getMonth();

      // Today = Form filling date and time
      const today = new Date();
      const dayOfMonth = today.getDate();
      const hr = today.getHours();
      const month = today.getMonth();

      if (mealType === "Breakfast") meal = 1;
      else if (mealType === "Lunch") meal = 2;
      else if (mealType === "Dinner") meal = 3;
      else {
        return res.status(400).json({ error: "Invalid meal type" });
      }

      if (
        (dayOfMonth > cancelDayOfMonth && cancelMonth === month) ||
        (dayOfMonth === cancelDayOfMonth - 1 && hr < 22)
      ) {
        return res.status(403).json({
          error:
            "Meal cancellation deadline exceeded. Unable to cancel the meal.",
        });
      }

      bill.mealLogs[cancelDayOfMonth - 1][meal] = 0;
      await bill.save();

      return res
        .status(200)
        .json({ message: "Meal cancelled successfully", billId: bill._id });
    } catch (error) {
      console.error("Error cancelling the meal", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
