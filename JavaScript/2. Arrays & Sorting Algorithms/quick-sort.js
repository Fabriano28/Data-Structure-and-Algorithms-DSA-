// Quick Sort

const numbers = [23, 10, 1, 15, 40, 33, 21, 8];

function quickSort(array) {
    if (!Array.isArray(array)) { return; }

    if (array.length <= 1) { return array; }
  
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const result = quickSort(numbers);

console.log(...result);