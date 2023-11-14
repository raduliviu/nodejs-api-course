const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required,
    },
    imageUrl: {
      type: String,
      required,
    },
    content: {
      type: String,
      required,
    },
    creator: {
      type: Object,
      required,
    },
  },
  { timestamps }
);

module.exports = mongoose.model('Post', postSchema);
