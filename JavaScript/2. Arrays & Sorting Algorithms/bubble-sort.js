// Bubble Sort

const numbers = [23, 10, 1, 15, 40, 33, 21, 8];

function bubbleSort(array) {
    if (!Array.isArray(array)) { return; }

    for(let j = array.length-1; j >= 0; j--){ 
        for(let i = 0; i <= j; i++){
            if(i != array.length - 1){
                if(array[i] > array[i+1]) {
                    [array[i], array[i+1]] = [array[i+1], array[i]];
                }
            }
        }
    }

    return array;
}

const result = bubbleSort(numbers);

console.log(...result);