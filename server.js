const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Mount routes
const bootcamps = require("./routes/bootcamps");
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
