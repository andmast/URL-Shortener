const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

// Setting up express app
const app = express();

// Body parser for express
app.use(express.json());

// Getting Connection key for mogodb Atlas
const db = config.get("mongoURI");

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`MongoDB connected.`))
  .catch(err => console.log(err));

// Define Routes
app.use("/", require("./routes/index"));
app.use("/api/urls", require("./routes/url"));

// Define Port
const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
