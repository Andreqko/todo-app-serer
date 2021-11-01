import express from 'express';

import loaders from './loaders/index.js';
import config from './config/index.js';

async function startServer() {
  const app = express();
  const port = config.port;

  await loaders(app);

  app.listen(port , (err)=>{
    if(err){
      process.exit(1);
    }
    console.info(`
        ################################################
            🏁  Server listening on port: ${port} 🏁 
        ################################################`);
  });
}

startServer();
