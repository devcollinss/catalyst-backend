// app/services/pineService.js
import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({ apiKey: config.pineconeApiKey });



// const { PineconeClient } = require('@pinecone-database/pinecone-client-grpc');
// const config = require('../../config/config');

// const pinecone = new PineconeClient({
//   environment: config.pineconeEnvironment,
//   apiKey: config.pineconeApiKey,
// });

const pineService = {
  createIndex: async (indexName) => {
    try {
      const response = await pinecone.createIndex({
        createRequest: {
          name: indexName,
          dimension: 1536, // Dimensionality of the OpenAI embeddings
        },
      });
      console.log(`Index created: ${response.name}`);
    } catch (error) {
      console.error(`Error creating index: ${error.message}`);
    }
  },

  upsertVectors: async (indexName, vectors) => {
    try {
      const index = pinecone.initIndex(indexName);
      await index.upsert({ vectors });
      console.log(`Vectors upserted to index ${indexName}`);
    } catch (error) {
      console.error(`Error upserting vectors: ${error.message}`);
    }
  },

  queryVectors: async (indexName, query, topK) => {
    try {
      const index = pinecone.initIndex(indexName);
      const queryEmbedding = await openaiEmbeddingService.generateEmbedding(query);
      const queryResponse = await index.query({
        vector: queryEmbedding,
        topK,
        includeMetadata: true,
      });
      return queryResponse.matches;
    } catch (error) {
      console.error(`Error querying vectors: ${error.message}`);
      return [];
    }
  },
};

module.exports = pineService;