// Selection Sort

const numbers = [23, 10, 1, 15, 40, 33, 21, 8];

function selectionSort(array) {
    if (!Array.isArray(array)) { return; }

    for(let i = 0; i < array.length; i++){
        let minValue = array[i];
        let minIndex= i;
        for(let j = i; j < array.length; j++){
            if(minValue > array[j]){
                minValue = array[j];
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    return array;
}

const result = selectionSort(numbers);

console.log(...result);