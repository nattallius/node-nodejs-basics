import {fork} from 'child_process';
import {fileURLToPath} from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const scriptPath = `${dirname}/files/script.js`;
const spawnChildProcess = async (args) => {
    const childProcess = fork(scriptPath, args, {silent: true});
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ['someArgument1', 'someArgument2'] );
