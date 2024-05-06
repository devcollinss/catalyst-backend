// app/routes/fileRoutes.js
const express = require('express');
const fileController = require('../controllers/fileController');

const router = express.Router();

router.post('/', fileController.uploadFile);

module.exports = router;