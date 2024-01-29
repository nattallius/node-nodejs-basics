import {createGunzip} from 'zlib';
import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from 'fs';
import {fileURLToPath} from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const decompressedFile = `${dirname}/files/fileToDecompress.txt`;
const compressedFile = `${dirname}/files/archive.gz`;

const decompress = async () => {
    const gzip = createGunzip();
    const source = createReadStream(compressedFile);
    const destination = createWriteStream(decompressedFile);
    await pipeline(source, gzip, destination);
};

await decompress();