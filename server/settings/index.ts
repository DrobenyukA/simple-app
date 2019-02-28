import path from 'path';
import dotenv from 'dotenv-safe';
import { Server } from 'http';
import { Settings } from './types';

dotenv.load({
    allowEmptyValues: true,
    path: path.join(__dirname, '../..', '.env'),
    sample: path.join(__dirname, '../..', '.env.example'),
});

function stopHandler(server: Server, port: string) {
    console.info(`Stopping server on port ${port}`);
    const timer = setTimeout(
        () => {
            console.info(`Server on port ${port} stop forcefully`);
            process.exit(1);
        },
        1000, // TODO: get timer values from settings
    );
    server.close(() => {
        console.log(`Server on port ${port} stopped`);
        clearTimeout(timer);
    });
}

export default {
    http: {
        port: process.env.API_HTTP_PORT,
    },
    stopHandler,
} as Settings;
