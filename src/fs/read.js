import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const currentFilename = fileURLToPath(import.meta.url);
const fileToRead = path.join(path.dirname(currentFilename), '/files/fileToRea3d.txt');
const read = async () => {
    try {
        const content = await fs.readFile(fileToRead, {encoding: 'utf8'});
        console.log(content);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await read();