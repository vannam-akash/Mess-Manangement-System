const express = require("express");
const Mess = require("../models/Mess");
const Student = require("../models/Student");
const Bill = require("../models/Bill");
const router = express.Router();
const passport = require("passport");

// Get students with unassigned mess
router.get(
  "/unassigned-students",
  passport.authenticate("staff-jwt", { session: false }),
  async (req, res) => {
    try {
      const students = await Student.find({ messEnrolled: null });
      return res.status(200).json(students);
    } catch (error) {
      console.log("Error fetching all the unassigned students");
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Assign Mess to a student
router.post(
  "/assign-student",
  passport.authenticate("staff-jwt", { session: false }),
  async (req, res) => {
    try {
      const { messId, studentId } = req.body;
    
      const student = await Student.findById(studentId);
    
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
    
      if (student.messEnrolled) {
        return res
          .status(400)
          .json({ error: "Student already enrolled in mess" });
      }
      const mess = await Mess.findById(messId);

      if (!mess) {
        return res.status(404).json({ error: "Mess not found" });
      }

      alreadyAdded = false;
      mess.students.map((id) => {
        if (id.equals(studentId)) {
          alreadyAdded = true;
        }
      });
      if (alreadyAdded === true) {
        return res.status(400).json({ error: "Student already added in mess" });
      }

      // Add student to mess and save
      mess.students.push(studentId);
      await mess.save();

      // Assign mess to student and save
      student.messEnrolled = messId;

      const bill = await Bill.create({ student: studentId });
      student.bill = bill._id;
      await student.save();

      return res.status(200).json({ message: "Mess assigned successfully" });
    } catch (error) {
      console.error("Error assigning mess to student:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);


// Get all students enrolled in mess
router.get(
    "/:messId/students",
    passport.authenticate("staff-jwt", { session: false }),
    async (req, res) => {
      try {
        const { messId } = req.params;
  
        const mess = await Mess.findById(messId).populate('students');
  
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
  

// Get all staff members of a Mess
router.get(
  "/:messId/staffs",
  passport.authenticate("staff-jwt", { session: false }),
  async (req, res) => {
    try {
      const { messId } = req.params;

      const mess = await Mess.findById(messId).populate("staffs");
      if (!mess) {
        return res.status(404).json({ error: "Mess not found" });
      }

      return res.status(200).json(mess.staffs);
    } catch {
      console.error("Error fetching all staffs", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;