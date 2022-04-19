//Create setTimeout with promises

delay(3000).then(() => console.log('after 3 sec'));

function delay (ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}