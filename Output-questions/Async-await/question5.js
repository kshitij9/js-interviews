const myPromise = () => Promise.resolve('RESolved');

function firstFunction () {
    myPromise().then((res) => console.log(res));
    console.log('second');
}

async function secondFunction () {
    console.log(await myPromise());
    console.log('second');
}

firstFunction();
secondFunction();