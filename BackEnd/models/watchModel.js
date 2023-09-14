const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const watchSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  id: {
    type: Number,
  },
});

module.exports = mongoose.model("Watches", watchSchema);
