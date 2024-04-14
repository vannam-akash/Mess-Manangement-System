const express = require("express");
const router = express.Router();
const Student = require("../models/Student");


// Get student from Id
router.get("/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;

    const student = await Student.findById(studentId);
    
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    delete student.password;
    return res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//Cancel a meal
router.post("/:studentId/cancel", async (req, res) => {
  try {
    const { studentId } = req.params;
    const { date, mealType } = req.body;

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Date on which a meal is to be cancelled
    const { dd, mm, yyyy } = date.split("-");
    const cancelDate = new Date(yyyy, mm - 1, dd);
    const cancelDay = cancelDate.getDay();

    // Today = Form filling date and time
    const today = new Date();
    const day = today.getDay();
    const hr = today.getHours();

    if (mealType === "Breakfast") meal = 0;
    else if (mealType === "Lunch") meal = 1;
    else if (mealType === "Dinner") meal = 2;
    else {
      return res.status(400).json({ error: "Invalid meal type" });
    }

    if (!(day <= dd && hr < 22)) {
      return res.status(403).json({
        error:
          "Meal cancellation deadline exceeded. Unable to cancel the meal.",
      });
    }

    student.mealLogs[day - 1][meal] = 0;
    await student.save();

    return res.status(200).json(studentId);
  } catch (error) {
    console.error("Error cancelling the meal", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
