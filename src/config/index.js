import dotenv from 'dotenv';

const env = dotenv.config();

if (env.error) {
  throw new Error('Couldn\'t find .env file')
}

export default {
  // Server port
  port: process.env.PORT || 3000,
  // Mongo db URL
  dbUrl: process.env.MONGO_DB_URL,
}
