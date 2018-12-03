const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  surname: String,
  createdDate: { type: Date, default: Date.now },
  city: String,
  address: String,
  phone: String
});

mongoose.model("person", schema);
