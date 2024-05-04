const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const passport = require("passport");

// Get student from Id
router.get(
  "/:studentId",
  passport.authenticate("student-jwt", { session: false }),
  async (req, res) => {
    try {
      const { studentId } = req.params;

      const student = await Student.findById(studentId).populate("bill").populate("extrasTaken");

      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      delete student.password;
      return res.status(200).json(student);
    } catch (error) {
      console.error("Error fetching student", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;