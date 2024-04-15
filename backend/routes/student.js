const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Get student from Id
router.get(
  "/:studentId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { studentId } = req.params;

      const student = await Student.findById(studentId);
      console.log(student);

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

// Get students with unassigned mess
router.get(
  "/unassignedStudent",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const students = await Student.find({ messEnrolled: null });

      if (students.length === 0) {
        return res.status(404).json({ error: "Unassigned Students not found" });
      }

      return res.status(200).json(students);
    } catch (error) {
      console.error("Error fetching all the unassigned students");
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);


// Get all students enrolled in mess
router.get(
  "/:messId/allStudents",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { messId } = req.params;

      const mess = await Mess.findById(messId);

      if (!mess) {
        return res.status(404).json({ error: "Mess not found" });
      }

      const studentsEnrolled = mess.students;
      if (studentsEnrolled.length === 0) {
        return res.status(400).json({ error: "No students enrolled in mess" });
      }

      return res.status(200).json(studentsEnrolled);
    } catch (error) {
      console.error("Error fetching all enrolled students", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);


module.exports = router;
