function customFlat (arr, depth = 1) {
    let acc = [];

    arr.forEach((elem) => {
        if(Array.isArray(elem) && depth > 0) {
            acc.push(...customFlat(elem, depth - 1));
        }
        else {
            acc.push(elem);
        }
    })

    return acc;
}

const arr = [1, 2, [3, [4, 5], [6]], 7, 8, 9];

console.log(customFlat(arr, 3));