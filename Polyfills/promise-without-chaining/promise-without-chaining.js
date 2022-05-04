const PromiseState = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
}

class NewPromise {
    constructor(executor) {
        this.state = PromiseState.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFn = null;
        this.catchFn = null;

        executor(this.resolver, this.rejector);
    }

    resolver (resolvedData) {
        if(this.state === PromiseState.PENDING) {
            this.thenFn && this.thenFn(resolvedData)
        }
        this.state = PromiseState.FULFILLED;
    }

    rejector (errorData) {
        if(this.state === PromiseState.PENDING) {
            this.catchFn && this.catchFn(errorData)
        }
        this.state = PromiseState.REJECTED;
    }

    then (thenFn) {
        this.thenFn = thenFn
        return this;
    }

    catch (catchFn) {
        this.catchFn = catchFn;
        return this;
    }
}