import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filePath = `${dirname}/files/fileToWrite.txt`;
const write = async () => {
   const file = fs.createWriteStream(filePath, {flags: 'a'});
    process.stdin.pipe(file);
};

await write();