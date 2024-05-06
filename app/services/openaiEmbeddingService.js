// app/services/openaiEmbeddingService.js
const { OpenAI } = require('openai');
const config = require('../../config/config');

const openai = new OpenAI(config.openaiApiKey);

const openaiEmbeddingService = {
  generateEmbedding: async (text) => {
    const response = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: text,
    });

    return response.data.data[0].embedding;
  },
};

module.exports = openaiEmbeddingService;