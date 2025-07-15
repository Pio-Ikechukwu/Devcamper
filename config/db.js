const mongoose = require("mongoose");
require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.bold);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
