import fs from 'fs/promises';
import {fileURLToPath} from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const fileToRemove = path.join(dirname, '/files/fileToRemove.txt');
const errorMsg = 'FS operation failed';
const remove = async () => {
    try {
        await fs.rm(fileToRemove)
    } catch (e) {
        throw new Error(errorMsg);
    }
};

await remove();