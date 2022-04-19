setTimeout(() => {
    console.log(1);
})

setTimeout(() => {
    console.log(2);
})

let p = new Promise((resolve, reject) => {
    resolve();
});

console.log(3);

p.then(() => {
    console.log(4);
});

p.then(() => {
    console.log(5);
});

setTimeout(() => {
    console.log(6);
})