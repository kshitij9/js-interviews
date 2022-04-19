Array.prototype.newReduce = function (...args) {
    let acc = this[0];
    let i = 0;
    if(args.length > 1) {
        acc = args[1];
        i = 1;
    }

    for(; i < this.length; i++) {
        acc = args[0](acc, this[i]);
    }

    return acc;
}

const arr = [1, 2, 3, 4, 5, 19];

const log = arr.newReduce((acc, elem) => acc += elem);

const log1 = arr.newReduce((acc, elem) => acc += elem, 25);

console.log(log, log1);