const express = require('express');
const router = express.Router();
const { submitBug, getAllBugs } = require('../controllers/bugController');

router.post('/bugs', submitBug);
router.get('/bugs', getAllBugs);

module.exports = router;
