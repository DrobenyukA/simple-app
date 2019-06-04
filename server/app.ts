import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { renderToString } from 'react-dom/server';
import express, { Request, Response } from 'express';

import settings from './settings';
import { reactToHtml } from './services/SSR';
import { projects } from './constants/routes';
import projectsRouter from './router/projects';
import client from './client';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
    express.static(
        path.join(__dirname, './public'),
        { maxAge: '30d'},
    )
);
const UI = renderToString(client());
app.use(`/api${projects}`, projectsRouter);

// Configuration for SPA
// app.get('*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, './public', 'index.html')));
app.get('*', (req: Request, res: Response) => reactToHtml(UI)
    .then((content: string) =>  res.sendFile(content))
    .catch((err) => console.error(err))
);

const server = app.listen(
    settings.http.port,
    () => console.log(`App started at http://localhost:${settings.http.port}`),
);

// Graceful shutdown
process.on('exit', (code) => console.info(`Exit with code ${code}`));

(['SIGTERM', 'SIGINT', 'SIGHUP'] as NodeJS.Signals[]).forEach(
    (signal) => process.on(signal, () => settings.stopHandler(server, settings.http.port)),
);
