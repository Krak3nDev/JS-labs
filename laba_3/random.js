function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(5, 10));
console.log(random(10));