const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const Staff = require("../models/Staff");
const helper = require("../utils/helper");

// Student Login
router.post("/login/student", async (req, res) => {
  try {
    const { rollNo, password } = req.body;

    const student = await Student.findOne({ rollNo: rollNo });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    if (password != student.password) {
      return res.status(404).json({ error: "Incorrect Password" });
    }

    const token = await helper.getToken(student._id);

    const studentToReturn = { ...student.toJSON(), token };
    delete studentToReturn.password;

    return res.status(200).json(studentToReturn);
  } catch (error) {
    console.error("Error logging in: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Mess Staff Login
router.post("/login/staff", async (req, res) => {
  try {
    const { phoneNo, password } = req.body;

    const staffMember = await Staff.findOne({ phoneNo: phoneNo });

    if (!staffMember) {
      return res.status(404).json({ error: "Staff Member not found" });
    }
    if (password !== staffMember.password) {
      return res.status(404).json({ error: "Incorrect Password" });
    }

    const token = await helper.getToken(staffMember._id);

    const staffMemberToReturn = { ...staffMember.toJSON(), token };
    delete staffMemberToReturn.password;

    return res.status(200).json(staffMemberToReturn);
  } catch (error) {
    console.error("Error logging in: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
