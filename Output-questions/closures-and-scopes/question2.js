function createIncrement () {
    let count = 0;
    function inc() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [inc, log];
}

const [inc, log] = createIncrement();

inc();
inc();
inc();

log();