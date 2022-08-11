const express = require('express');
const router = express.Router();

const { home, about } = require('../controller/mainController');


router
.get('/',home)
.get('/about', about)

module.exports = router;