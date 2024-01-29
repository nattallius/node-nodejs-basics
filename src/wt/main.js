import {cpus} from 'os';
import {fileURLToPath} from "url";
import path from "path";
import {Worker} from 'worker_threads';


const filename = fileURLToPath(import.meta.url);
const workerPath = `${path.dirname(filename)}/worker.js`;
const performCalculations = async () => {
    const cpuNumber = cpus().length;
    const workersArray = [];
    for (let i = 0; i < cpuNumber; i++) {
        const promise = new Promise((resolve) => {
            const worker = new Worker(workerPath, {workerData: i + 10});
            worker.on('message', (res) => resolve({status: 'resolved', data: res}));
            worker.on('error', () => resolve({status: 'error', data: null}));
        });
        workersArray.push(promise);
    }
    const resul = await Promise.all(workersArray);
    console.log(resul);
}

await performCalculations();