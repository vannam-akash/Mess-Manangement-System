const express = require("express");
const router = express.Router();
const Extras = require("../models/Extras");
const Student = require("../models/Student");

// extras detail
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { rollNo, dish, price, quantity } = req.body;

      const student = await Student.findOne({ rollNo: rollNo });

      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      const extra = await Extras.create({
        student: student._id,
        dish,
        price,
        quantity,
      });

      student.extrasTaken.push(extra._id);
      await student.save();

      return res.status(200).json(extra);
    } catch (error) {
      console.error("Error updating extras", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Get all extras and extrasBill of a student
router.get(
  "/:studentId/get/all",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { studentId } = req.params;

      const student = await Student.findById(studentId).populate("extrasTaken");

      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      const extrasTaken = student.extrasTaken;
      if (extrasTaken.length === 0) {
        return res.status(400).json({ error: "No extras taken" });
      }
      extrasBill = 0;

      extrasTaken.forEach((extra) => {
        extrasBill += extra.price * extra.quantity;
      });

      return res.status(200).json({extrasTaken, extrasBill});
    } catch (error) {
      console.error("Error fetching all extras of student", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
