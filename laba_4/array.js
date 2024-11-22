function max(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return undefined;
    }

    let currentMax = -Infinity;

    for (const row of matrix) {
        for (const num of row) {
            if (num > currentMax) {
                currentMax = num;
            }
        }
    }

    return currentMax;
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(max([[10, 20], [30, 40, 50], [5]]));
console.log(max([]));
console.log(max([[-10, -20], [-30, -40]]));
