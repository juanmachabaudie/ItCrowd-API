const functions = require("firebase-functions");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to Cars API, this was created to a hiring opportunity. Wish me luck!",
  });
});

app.use("/", routes);

app.use((req, res) => {
  res.json({
    error: {
      name: "Error",
      status: 404,
      message: "Invalid Request",
      statusCode: 404,
    },
  });
});

exports.app = functions.https.onRequest(app);
