require('dotenv').config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  PORT: process.env.PORT || 5000,
}; 