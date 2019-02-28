import { Server } from 'http';

export type StopHandler = (server: Server, port: string) => void;

export interface HttpSettings {
    port: string;
}

export interface Settings {
    http: HttpSettings;
    stopHandler: StopHandler;
}
