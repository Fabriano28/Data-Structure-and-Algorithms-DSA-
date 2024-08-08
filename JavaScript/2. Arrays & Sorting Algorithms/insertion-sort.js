// Insertion Sort

const numbers = [23, 10, 1, 15, 40, 33, 21, 8];

function insertionSort(array) {
    if (!Array.isArray(array)) { return; }

    for(let i = 1; i < array.length; i++){
        for(let j = i; j > 0; j--){
            if(array[j] < array[j-1]){
                [array[j-1], array[j]] = [array[j], array[j-1]];
            }
        }
    }

    return array;
}

const result = insertionSort(numbers);

console.log(...result);
