import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';

import cors from 'cors';
import BaseRouter from './routes/api';
import logger from 'jet-logger';
import EnvVars from '@src/declarations/major/EnvVars';
import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';
import { NodeEnvs } from '@src/declarations/enums';
import { RouteError } from '@src/declarations/classes';


// **** Init express **** //

const app = express();

app.use(cors())

// **** Set basic express settings **** //

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(EnvVars.cookieProps.secret));

// Show routes called in console during development
if (EnvVars.nodeEnv === NodeEnvs.Dev) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.nodeEnv === NodeEnvs.Production) {
  app.use(helmet());
}


// **** Add API routes **** //

// Add APIs
app.use('/api', BaseRouter);

// Setup error handler
app.use((
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  logger.err(err, true);
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});


// **** Export default **** //

export default app;
