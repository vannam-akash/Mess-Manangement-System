const express = require("express");
const Staff = require("../models/Staff");
const Mess = require("../models/Mess");
const router = express.Router();

// Get staff from Id
router.get("/:staffId", async (req, res) => {
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
});

// Get all staff members of a Mess
router.get("/:messId", async (req, res) => {
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
});

module.exports = router;
