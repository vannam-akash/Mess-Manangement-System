const express = require("express");
const Staff = require("../models/Staff");
const router = express.Router();
const passport = require("passport");

// Get staff from Id
router.get(
  "/:staffId",
  passport.authenticate("staff-jwt", { session: false }),
  async (req, res) => {
    try {
      const { staffId } = req.params;

      const staff = await Staff.findById(staffId).populate("messEnrolled");

      if (!staff) {
        return res.status(404).json({ error: "Staff not found" });
      }

      delete staff.password;
      return res.status(200).json(staff);
    } catch (error) {
      console.error("Error fetching staff", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);


module.exports = router;
