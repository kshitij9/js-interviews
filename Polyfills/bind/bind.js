Function.prototype.newBind = function (...args) {
    const context = this;
    const params = args.slice(1);
    return function () {
        return context.apply(args[0], params);
    }
}

this.x = 9;    // this refers to global "window" object here in the browser
var mod = {
  x: 81,
  getX: function () { return this.x; }
};
mod.getX(); // 81
const retrieveX = mod.getX;
retrieveX();
// returns 9 - The function gets invoked at the global scope
// Create a new function with 'this' bound to mod
// New programmers might confuse the
// global const x with mod's property x
const boundGetX = retrieveX.newBind(mod);
console.log(boundGetX()); // 81