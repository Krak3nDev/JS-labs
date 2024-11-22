function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function removeElements(array, ...items) {
    for (const item of items) {
        let index;
        while ((index = array.indexOf(item)) !== -1) {
            array.splice(index, 1);
        }
    }
}

function unique(array) {
    const seen = new Set();
    const result = [];
    for (const item of array) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }
    return result;
}

function difference(array1, array2) {
    const set2 = new Set(array2);
    return array1.filter(item => !set2.has(item));
}


console.log('--- removeElement ---');
const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log('Example 1:', array1);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log('Example 2:', array2);

console.log('\n--- removeElements ---');
const array3 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array3, 5, 1, 6);
console.log('Example 3:', array3);

const array4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
console.log('Example 4:', array4);

console.log('\n--- unique ---');
const array5 = [2, 1, 1, 3, 2];
const result1 = unique(array5);
console.log('Example 5:', result1);

const array6 = ['top', 'bottom', 'top', 'left'];
const result2 = unique(array6);
console.log('Example 6:', result2);

console.log('\n--- difference ---');
const array7 = [7, -2, 10, 5, 0];
const array8 = [0, 10];
const result3 = difference(array7, array8);
console.log('Example 7:', result3);

const array9 = ['Beijing', 'Kiev'];
const array10 = ['Kiev', 'London', 'Baghdad'];
const result4 = difference(array9, array10);
console.log('Example 8:', result4);
