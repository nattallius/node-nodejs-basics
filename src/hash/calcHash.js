import crypto from 'crypto';
import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const hashFilePath = `${dirname}/files/fileToCalculateHashFor.txt`;

const calculateHash = async () => {
    const fd = fs.createReadStream(hashFilePath);
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');

    fd.on('end', function () {
        hash.end();
        console.log(hash.read());
    });

    fd.pipe(hash);
};

await calculateHash();