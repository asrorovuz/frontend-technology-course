const { model, Schema } = require("mongoose");

const documentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  data: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("documention", documentSchema);
