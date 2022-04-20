/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
 function throttle(func, wait) {
    // your code here
    let timer = null;
    let lastArgs = null;
    return function (...args) {
      let context = this;
      if(!timer) {
        func(args);
        timer = setTimeout(() => {
          if(lastArgs) {
            func.apply(context, lastArgs);
          }
          timer = null
        }, wait);
      }
      else {
        lastArgs = args;
      }
    }
  }