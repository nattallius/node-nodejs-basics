import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filePath = `${dirname}/files/fileToRead.txt`;
const read = async () => {
    fs.createReadStream(filePath).pipe(process.stdout);
};

await read();