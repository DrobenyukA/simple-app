import fs from 'fs';
import path from 'path';

export const reactToHtml = (body: string) => new Promise((res, rej) => {
    fs.readFile(
        path.resolve(__dirname, '../../build/public/index.html'),
        'utf8',
        (err: Error, data: string) => {
            if (err) {
                return rej(err);
            }
            return res(
                data.replace(
                    '<div id="root"></div>',
                    `<div id="root">${body}</div>`,
                ),
            );
        }
    );
});
