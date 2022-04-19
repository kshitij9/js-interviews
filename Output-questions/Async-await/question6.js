const myPromise = Promise.resolve(Promise.resolve('resolved'));

function f1 () {
    myPromise.then(res => res).then(res => console.log(res));
    setTimeout(() => console.log('Timeout'), 0);
    console.log('Last Line!');
}

async function f2 () {
    const res = await myPromise;
    console.log(await res);
    setTimeout(() => console.log('Timeout'), 0);
    console.log('Last Line!');
}

f1();
f2();


/**
 * After `last line` and first promise call stack is not empty yet as f2 is still there
 * thus, both `timeout`s will be printed at the last
 */