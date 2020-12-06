const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");
const offline_db = config.get("Offline_mongoURI");
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected.");
  } catch (error) {
    console.error(error.message + " --OR-- Check Your Internet Connection.");
    process.exit(1);
  }
};

module.exports = connectDB;

//vg00pj3dOdDRXlVr
//mongodb+srv://db1:<password>@cluster0.7llkc.mongodb.net/<dbname>?retryWrites=true&w=majority
//working connect mongodb....
