const express = require("express");
const router = express.Router();
const Extras = require("../models/Extras");
const Student = require("../models/Student");

// extras detail
router.post("/:studentId/extra", async (req, res) => {
  try {
    const { studentId } = req.params;
    const { dish, price, quantity } = req.body;

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const extra = await Extras.create({
      student: studentId,
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
});

module.exports = router;
