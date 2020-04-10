const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const routes = require("./routes");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
  })

const walksRouter = require("./routes/walks");
app.use("/walks", walksRouter);

app.listen(PORT, () =>
  console.log(`API Server now listening on PORT ${PORT}!`)
);