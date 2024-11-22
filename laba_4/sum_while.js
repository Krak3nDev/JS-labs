function sum(...args) {
    let total = 0;
    let i = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
}

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

console.log(a, b, c, d, e);
