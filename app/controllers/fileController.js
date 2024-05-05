// app/controllers/fileController.js
const fileService = require('../services/fileService');
const openaiEmbeddingService = require('../services/openaiEmbeddingService');
const pineService = require('../services/pineService');
const logger = require('../utils/logger');

const fileController = {
  uploadFile: async (req, res) => {
    const { projectId, name, content } = req.body;
    try {
      const file = fileService.uploadFile(projectId, name, content);
      const embedding = await openaiEmbeddingService.generateEmbedding(content);
      file.vector = embedding;

      // Upsert the file vector to the Pinecone index
      const indexName = `project_${projectId}`;
      await pineService.upsertVectors(indexName, [{ id: file.id, values: file.vector }]);

      res.status(201).json(file);
    } catch (error) {
      logger.log(`Error uploading file: ${error.message}`);
      res.status(500).json({ error: 'Error uploading file' });
    }
  },
};

module.exports = fileController;