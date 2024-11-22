function array() {
    const arr = [];

    function accessor(index) {
        return arr[index];
    }

    accessor.push = function(value) {
        arr.push(value);
    };

    accessor.pop = function() {
        return arr.pop();
    };

    return accessor;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0))
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
