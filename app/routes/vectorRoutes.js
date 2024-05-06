// app/routes/vectorRoutes.js
const express = require('express');
const vectorController = require('../controllers/vectorController');

const router = express.Router();

router.post('/query', vectorController.queryVectors);

module.exports = router;
