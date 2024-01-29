import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filePath = `${dirname}/files/fresh.txt`;
const create = async () => {
    try {
        await fs.writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await create();