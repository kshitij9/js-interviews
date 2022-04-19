async function getData() {
    return await Promise.resolve('asdasd');
}

const data = getData();

console.log(data);

/**
 * It will log a pending promise
 * 
 * `async` function always returns a promise and since we have an await before promise.resolve 
 * 
 * the promise still pending
 * 
 * 
 * To log the message add a .then() on data
 */