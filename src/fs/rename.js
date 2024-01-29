import fs from 'fs/promises';
import {fileURLToPath} from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const oldFilePath = path.join(dirname, '/files/wrongFilename.txt');
const newFilePath = path.join(dirname, '/files/properFilename.md');
const errorMsg = 'FS operation failed';

const rename = async () => {
    const fileExists = await fs.access(newFilePath, fs.constants.F_OK).then(() => true, () => false);
    if (fileExists) throw new Error(errorMsg);

    try {
        await fs.rename(oldFilePath, newFilePath);
    } catch (e) {
        console.log(e);
        throw new Error(errorMsg);
    }
};

await rename();