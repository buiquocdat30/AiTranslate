const express = require('express');
const router = express.Router();
const translationController = require('../controllers/translationController');

router.post('/translate', translationController.translate);
router.get('/history', translationController.getHistory);

module.exports = router; 