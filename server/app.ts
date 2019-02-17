import path from 'path';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import projectsRouter from './router/projects';
import { projects } from './constants/routes';

const app = express();
const API_PORT = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './public')));
app.use(`/api${projects}`, projectsRouter);

// Configuration for SPA
app.get('*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, './public', 'index.html')));

app.listen(API_PORT, () => console.log(`App started at http://localhost:${API_PORT}`));
