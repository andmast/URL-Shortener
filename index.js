const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

app.use(express.json());

const db = config.get("mongoURI");

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`MongoDB connected.`))
  .catch(err => console.log(err));

// Define Routes
app.use("/", require("./routes/index"));
app.use("/api/urls", require("./routes/url"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
