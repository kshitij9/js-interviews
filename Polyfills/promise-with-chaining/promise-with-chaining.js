const PromiseState = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
}

class NewPromise {
    constructor(executor) {
        this.state = PromiseState.PENDING;

        this.thenFns = [];
        this.catchFn = null;
        this.resolvedData = null;

        this.resolverFn = this.resolverFn.bind(this);
        this.rejectorFn = this.rejectorFn.bind(this);
        executor(this.resolverFn, this.rejectorFn);
    }

    resolverFn (resolvedValue) {
        if(this.state === PromiseState.PENDING) {
            this.thenFns.forEach((thenFn) => {
                this.resolvedData = thenFn(this.resolvedData || resolvedValue);
            })
        }
        else { 
            return;
        }
    }

    rejectorFn (rejectedValue) {
        if(this.state === PromiseState.PENDING) {
            this.catchFn && this.catchFn(rejectedValue);
            this.state = PromiseState.REJECTED;
        }
        else { 
            return;
        } 
    }

    then (thenFn) {
        this.thenFns.push(thenFn);
        return this;
    }

    catch (catchFn) {
        this.catchFn = catchFn;
        return this;
    }
}


const getNumber = () =>
    new NewPromise((res, rej) => {
        const rand = 10;
        setTimeout(() => {
            res(rand)
        }, rand * 10);
    });

const incNumber = (original, incQuantity = 1) => {
    return original + incQuantity
}

const clickHandler = () => {
    const numberPromise = getNumber();
    numberPromise
        .then((val) => incNumber(val, 10))
        .then((val) => incNumber(val, 20))
        .then((val) => incNumber(val, 30))
        .then(val => console.log(val))
}

clickHandler();