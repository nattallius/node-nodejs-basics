const parseArgs = () => {
    process.argv.slice(2).forEach((arg, i, arr) => {
        if (arg.startsWith('--')) {
            console.log(`${arg.replace('--', '')} is ${arr[i + 1]}`);
        }
    });
};

parseArgs();