import * as PineconeClient from '@pinecone-database/pinecone-client';

const pinecone = new PineconeClient.PineconeClient({
  environment: process.env.PINECONE_ENVIRONMENT, 
  apiKey: process.env.PINECONE_API_KEY, 
});

export default pinecone;