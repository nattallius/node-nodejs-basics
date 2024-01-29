import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const currentFilename = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilename);
const filesDirectory = path.join(currentDirectory, '/files');
const copyFilesDirectory = path.join(currentDirectory, '/files_copy');
const errorMsg = 'FS operation failed';
const copy = async () => {
    if (!fs.existsSync(filesDirectory) || fs.existsSync(copyFilesDirectory)) throw new Error(errorMsg);

    const filenames = fs.readdirSync(filesDirectory);
    fs.mkdirSync(copyFilesDirectory);

    for (let filename of filenames) {
        fs.copyFile(path.join(filesDirectory, `/${filename}`), path.join(copyFilesDirectory, `/${filename}`), (e)=>{})
    }
};

await copy();
