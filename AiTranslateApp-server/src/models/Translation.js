const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
  text: String,
  translated: String,
  from: String,
  to: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Translation', translationSchema); 