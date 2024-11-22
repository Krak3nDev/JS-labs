function compose(...fns) {
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('All arguments of the pipe function must be functions');
    }

    const listeners = {
        error: []
    };

    const composed = function(initialValue) {
        let result = initialValue;
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                result = fns[i](result);
            }
            return result;
        } catch (error) {
            listeners.error.forEach(listener => listener(error));
            return undefined;
        }
    };

    composed.on = function(event, listener) {
        if (event === 'error' && typeof listener === 'function') {
            listeners.error.push(listener);
        }
        return composed;
    };

    return composed;
}


const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = compose(cube, twice, inc);
const x1 = f1(5);
console.log(x1);

const faulty = x => {
    if (x < 0) throw new Error('Negative value!');
    return x;
};

const f2 = compose(cube, faulty, twice, inc);

f2.on('error', (e) => {
    console.error('Error!', e.message);
});

const x2 = f2(5);
console.log(x2);

const x3 = f2(-3);
console.log(x3);
