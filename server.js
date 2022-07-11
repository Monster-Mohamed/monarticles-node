const express = require("express");

// app express
const app = express();

// port number
const port = 5000;

const link = "DB_LINK";

// helmet require
const helmet = require("helmet");

// body parser
const bodyParser = require("body-parser");

// -----------------
// start routes
// -----------------

const articlesRouter = require("./routes/articles");

// -----------------
// end routes
// -----------------

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// parse application/json
app.use(bodyParser.json());

// use helmet
app.use(helmet());

// mongos connection

const mongoose = require("mongoose");

mongoose
  .connect(link)
  .then((result) => {
    app.listen(
      process.env.PORT || port,
      () => `Server running on port http://localhost:${port}`
    );
  })
  .catch((err) => {
    console.log(err);
  });

// end mongos connection

// articles routes
// we put the /api cause all routes have /api at the beginning
app.use("/api", articlesRouter);
