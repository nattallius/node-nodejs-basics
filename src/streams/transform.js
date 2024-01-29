import { Transform } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().split("").reverse().join(""));
        callback();
    }
})
const transform = async () => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();