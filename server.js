// server.js
const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const logger = require('./app/utils/logger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// ... (We'll add routes later)

// Start the server
app.listen(config.port, () => {
    console.log(`server connected on port ${config.port}`)
  logger.log(`Server started on port ${config.port}`);
});