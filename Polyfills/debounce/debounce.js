const func = (text) => console.log('text', text);

const debFunc = createDebFunc(func, 200);

const createDebFunc = (fn, delay) => {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay)
    }
}