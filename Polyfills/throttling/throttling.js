const func = (text) => console.log(text);

const throtFunc = createThrotFunc(func, 300);

const createThrotFunc = (fn, delay) => {
    let flag = true;
    return function (...args) {
        if(flag) {
            fn(args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}