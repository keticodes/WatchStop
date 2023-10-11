const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const watchSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    image: {
      type: mongoose.Schema.Types.ObjectId,
    },
    price: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Watches", watchSchema);
