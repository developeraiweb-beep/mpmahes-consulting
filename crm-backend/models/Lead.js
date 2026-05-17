const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    service: {
      type: String,
      required: true
    },

    date: {
      type: String
    },

    message: {
      type: String,
      required: true
    },

    status: {
      type: String,
      default: "new"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Lead", LeadSchema);