// server.js
const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const logger = require('./app/utils/logger');

const projectRoutes = require('./app/routes/projectRoutes');
const fileRoutes = require('./app/routes/fileRoutes');
const vectorRoutes = require('./app/routes/vectorRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/vectors', vectorRoutes);

// Start the server
app.listen(config.port, () => {
    console.log(`server connected on port ${config.port}`)
  logger.log(`Server started on port ${config.port}`);
});