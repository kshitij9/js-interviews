let p = new Promise((resolve, reject) => {
    reject(new Error('some error'));
    setTimeout(() => {
        reject(new Error('some error'));
    })
    reject(new Error('some error 1'));
});

p.then(null, function (err) {
    console.log('1');
    console.log(err);
}).catch(function (err) {
    console.log('2');
    console.log(err);
})

/**
 * `then` takes 2 arguments, first is a function that is executed when promise is resolved.
 * second is executed when promise is rejected.
 */