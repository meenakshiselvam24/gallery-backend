const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
const corsOptions = {
  origin: '*',  // Allow only this domain to access the server
  methods: ['GET', 'POST'],       // Allow only GET and POST methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
  credentials: true,              // Allow cookies and credentials
};
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("MonoDB Connected...");
});

app.use(UploadRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
