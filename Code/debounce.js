/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
 function debounce(func, wait) {
    // your code here
    let timer;
    return function (...args) {
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }