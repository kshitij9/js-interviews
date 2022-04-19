Array.prototype.newFilter = function (callback) {
    let arr = [];

    for(let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            arr.push(this[i]);
        }
    }

    return arr;
}

const arr = [1, 3, 5, 7, 150];

console.log(arr.newFilter(n => n > 5));