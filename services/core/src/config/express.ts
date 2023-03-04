import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import helmet from 'helmet';
import compress from 'compression';
import morgan from 'morgan';
import cors from 'cors';

import { vars } from './vars';

import { onApiError } from '../utils/rest/middlewares/errorHandler';
import routes from '../rest';

const { logs, isLocal } = vars;

const app = express();

app.use(morgan(logs));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());

app.use(methodOverride());

app.use(helmet());

app.use(cors({
    origin: isLocal ? vars.webClientUrl : undefined,
    credentials: true,
}));

app.use('/api', routes);

app.use(onApiError);

export { app };
