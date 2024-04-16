const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const Staff = require("./models/Staff"); // Import Staff model
const Student = require("./models/Student"); // Import Student model

// let opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.SECRET;

// passport.use(
//   new JwtStrategy(opts, async function (jwt_payload, done) {
//     try {
//       if (jwt_payload.userType === "staff") {
//         const staff = await Staff.findById(jwt_payload.sub);
//         if (staff) {
//           return done(null, staff);
//         }
//       } else if (jwt_payload.userType === "student") {
//         const student = await Student.findById(jwt_payload.sub);
//         if (student) {
//           return done(null, student);
//         }
//       }
//       return done(null, false);
//     } catch (error) {
//       return done(error, false);
//     }
//   })
// );



let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

// Student authentication strategy
passport.use('student-jwt', new JwtStrategy(opts, async function(jwt_payload, done) {
  try {
      const user = await Student.findOne({id: jwt_payload.sub});
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
      }
  } catch (error) {
      return done(error, false);
  }
}));

// Staff authentication strategy
passport.use('staff-jwt', new JwtStrategy(opts, async function(jwt_payload, done) {
  try {
      const user = await Staff.findOne({id: jwt_payload.sub});
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
      }
  } catch (error) {
      return done(error, false);
  }
}));



