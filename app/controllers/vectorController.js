
// app/controllers/vectorController.js
const pineService = require('../services/pineService');
const logger = require('../utils/logger');

const vectorController = {
  queryVectors: async (req, res) => {
    const { projectId, query } = req.body;
    try {
      const indexName = `project_${projectId}`;
      const matches = await pineService.queryVectors(indexName, query, 5);
      res.json(matches);
    } catch (error) {
      logger.log(`Error querying vectors: ${error.message}`);
      res.status(500).json({ error: 'Error querying vectors' });
    }
  },
};

module.exports = vectorController;