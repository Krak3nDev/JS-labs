const average = (a, b) => {
    return (a + b) / 2;
};

const square = (value) => {
    return value ** 2;
};

const cube = (value) => {
    return value ** 3;
};

const calculate = () => {
    let results = [];
    for (let number = 0; number <= 9; number++) {
        const squaredValue = square(number);
        const cubedValue = cube(number);
        const averageValue = average(squaredValue, cubedValue);
        results.push(averageValue);
    }
    return results;
};

console.log(calculate());
