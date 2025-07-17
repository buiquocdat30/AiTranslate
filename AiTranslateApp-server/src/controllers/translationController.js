const geminiService = require('../services/geminiService');
const Translation = require('../models/Translation');

exports.translate = async (req, res) => {
  const { text, from, to } = req.body;
  try {
    const translated = await geminiService.translateText(text, from, to);
    const history = await Translation.create({ text, translated, from, to, createdAt: new Date() });
    res.json({ translated, history });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await Translation.find().sort({ createdAt: -1 }).limit(50);
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 