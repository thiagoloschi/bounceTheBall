const mongoose = require('mongoose');

module.exports = mongoose.Schema({
  player: {
    type: String,
  },
  score: {
    type: Number,
  },
  stage: {
    type: String,
  },
});
