function iterate(object, callback) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            callback(key, object[key], object);
        }
    }
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
    console.log({ key, value });
});


function store(value) {
    let storedValue = value;
    return function() {
        return storedValue;
    }
}

const read = store(5);
const value = read();
console.log(value);

function contract(fn, ...types) {
    return function(...args) {
        if (args.length !== types.length - 1) {
            throw new TypeError('Incorrect number of arguments');
        }
        for (let i = 0; i < args.length; i++) {
            const expectedType = types[i].name.toLowerCase();
            if (typeof args[i] !== expectedType) {
                throw new TypeError(`Argument ${i + 1} is not of type ${types[i].name}`);
            }
        }
        const result = fn(...args);
        const returnType = types[types.length - 1].name.toLowerCase();
        if (typeof result !== returnType) {
            throw new TypeError(`Return value is not of type ${types[types.length - 1].name}`);
        }
        return result;
    }
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.log(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.log(res2);
