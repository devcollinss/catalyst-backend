// app/services/openaiEmbeddingService.js
const { Configuration, OpenAIApi } = require('openai');
const config = require('../../config/config');

const configuration = new Configuration({
  apiKey: config.openaiApiKey,
});
const openai = new OpenAIApi(configuration);

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