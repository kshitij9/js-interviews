const func = (text) => console.log(text);

const throtFunc = createThrotFunc(func, 300);

const createThrotFunc = (fn, delay) => {
    let timer = null;
    let lastArgs = null;
    return function (...args) {
        const context = this;
        if(!timer) {
            fn(args);
            timer = setTimeout(() => {
                if(lastArgs) {
                    fn.apply(context, args);
                }
                timer = null;
            }, delay)
        }
        else {
            lastArgs = args;
        }
    }
}