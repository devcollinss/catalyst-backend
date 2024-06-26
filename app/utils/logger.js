// utils/logger.js
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'logs', 'application.log');

const logger = {
  log: (message) => {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - ${message}\n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
  },
};

module.exports = logger;

