import {createGzip} from 'zlib';
import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from 'fs';
import {fileURLToPath} from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compressFile = `${dirname}/files/fileToCompress.txt`;
const compressedFile = `${dirname}/files/archive.gz`;

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(compressFile);
    const destination = createWriteStream(compressedFile);
    await pipeline(source, gzip, destination);
};

await compress();