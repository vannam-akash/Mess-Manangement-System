const jwt = require("jsonwebtoken");

helper = {};
helper.getToken = async (studentId) => {
  const token = jwt.sign({ identifier: studentId }, process.env.SECRET, {
    expiresIn: "30d",
  });

  return token;
};

module.exports = helper;
