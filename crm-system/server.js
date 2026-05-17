// server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const leadRoutes = require("./routes/leads");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);

app.listen(5000, () => {
  console.log("CRM Server running on port 5000");
});