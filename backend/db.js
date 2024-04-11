const mongoose = require("mongoose");

const mongoConnect = async () => {
  mongoose.connect(
      "mongodb+srv://" +
       process.env.MONGO_USERNAME +
      ":" +
       process.env.MONGO_PASSWORD +
      "@cluster0.amuso8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Successfully connected to mongo!");
    })
    .catch((err) => {
      console.log("Error while connecting to mongo...", err);
    });
};

module.exports = mongoConnect;
