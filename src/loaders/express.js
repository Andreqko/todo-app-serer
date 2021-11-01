import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from '../api/index.js';

export default app => {
  // Set up logging
  app.use(morgan('dev'));
  // Transform string to JSON.
  app.use(bodyParser.json({ limit: '20mb' }));
  // Configure cors
  app.use(cors({
    origin: [/localhost/],
  }))
  // Check server health
  app.use('/healthcheck', (req, res) => {
    const isMongoConnected = mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      return res.sendStatus(200);
    }

    res.sendStatus(500);
  });
  // Routes
  app.use('/', routes);
  // Catch 404 and forward to error handle.
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });
  // Global error catcher
  app.use(( error, req, res, next ) => {
    res.status(error.status || 500);
    res.json({
      errors: {
        message: error.message
      }
    })
  })
};
