async function seedFunc() {
  try {
    // Insert seed data into the collection
    await mongoose.connection.dropDatabase();
    await Student.insertMany(studs);
    await Mess.insertMany(messes);
    const RajMess = await Mess.findOne({ hostel: "Rajputana" });
    const LimbdiMess = await Mess.findOne({ hostel: "Limbdi" });
    staffs[0].messEnrolled = LimbdiMess._id;
    staffs[1].messEnrolled = RajMess._id;
    await Staff.insertMany(staffs);
    const raju = await Staff.findOne({ phoneNo: "9999999998" });
    const ramesh = await Staff.findOne({ phoneNo: "9999999999" });
    LimbdiMess.staffs.push(raju._id);
    RajMess.staffs.push(ramesh._id);
    await LimbdiMess.save();
    await RajMess.save();

    console.log("Student, Mess, Staff data inserted successfully");
  } catch (err) {
    console.error("Error seeding student data:", err);
  }
}

module.exports = seedFunc;