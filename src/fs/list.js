import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const currentFilename = fileURLToPath(import.meta.url);
const filesDirectory = path.join(path.dirname(currentFilename), '/files')
const list = async () => {
    try {
        const files = await fs.readdir(filesDirectory);
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();