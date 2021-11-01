import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';

export default async expressApp => {
  // MongoDB loader, creates mongoClient and connect to the db and return db connection.
  await mongooseLoader();
  // Express app loader, creates an app and loads express essentials
  expressLoader(expressApp);
}
