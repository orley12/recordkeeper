import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

import { respondWithWarning } from './utils/responseUtil';
import config from './config/constants';
import routes from './routes';

const app = express();

const { BASE_URL, PORT } = config();
const port = PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));

// Load auth routes
routes(app);

// handles all unimplemented routes
app.use('*', (req, res) => respondWithWarning(res, 404, 'Unhandled route requested (404)'));

app.listen(port, () => { console.log(`We are on ${BASE_URL}${port}/ express 🚀🚀🚀 at ${port} port`); });
