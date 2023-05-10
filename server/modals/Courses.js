const { model, Schema } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  image: {
    required: true,
    type: String,
  },

  data: {
    type: Date,
    default: new Date(),
  },

  videos: [
    {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = model("courses", courseSchema);
