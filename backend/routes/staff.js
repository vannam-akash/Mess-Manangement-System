const express = require("express");
const Staff = require("../models/Staff");
const Mess = require("../models/Mess");
const Student = require("../models/Student");
const Bill = require("../models/Bill");
const router = express.Router();

// Get staff from Id
router.get(
  "/:staffId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { staffId } = req.params;

      const staff = await Staff.findById(staffId).populate("messEnrolled");

      if (!staff) {
        return res.status(404).json({ error: "Staff not found" });
      }

      if (staff.messEnrolled.manager.equals(staffId)) {
        staff.isManager = true;
      }

      delete staff.password;
      return res.status(200).json(staff);
    } catch (error) {
      console.error("Error fetching staff", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Assign Mess to a student
router.post(
  "/assign/student",
  passport.authenticate("jwt", { session: false }),
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
      for (let i = 0; i < mess.students.length; i++) {}
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
      await student.save();

      const bill = await Bill.create({ student: studentId });

      return res.status(200).json({ message: "Mess assigned successfully" });
    } catch (error) {
      console.error("Error assigning mess to student:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Get all staff members of a Mess
router.get(
  "/:messId",
  passport.authenticate("jwt", { session: false }),
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
