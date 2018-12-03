const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/Person");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());

require("./routes/persons")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js, or main.css
  app.use(express.static("client/build"));

  // Express will serve up index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

const db = mongoose.connection;
db.once("open", function() {
  console.log("Db Connected!");
});
db.on("error", console.error.bind(console, "Db connection error:"));
