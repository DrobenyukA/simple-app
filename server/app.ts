import path from 'path';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import settings from './settings';
import projectsRouter from './router/projects';
import { projects } from './constants/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './public')));
app.use(`/api${projects}`, projectsRouter);

// Configuration for SPA
app.get('*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, './public', 'index.html')));

const server = app.listen(
    settings.http.port,
    () => console.log(`App started at http://localhost:${settings.http.port}`),
);

// Graceful shutdown
process.on('exit', (code) => console.info(`Exit with code ${code}`));

(['SIGTERM', 'SIGINT', 'SIGHUP'] as NodeJS.Signals[]).forEach(
    (signal) => process.on(signal, () => settings.stopHandler(server, settings.http.port)),
);
