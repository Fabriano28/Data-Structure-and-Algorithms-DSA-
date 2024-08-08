// Find The Lowest Value in an Array

const numbers = [8, 9, 2, 4, 15];

function minValue(array) {
    if (!Array.isArray(array)) { return; }

    let minValue = array[0];
    array.forEach(element => {
        if(minValue > element) { minValue = element};
    });

    return minValue;
}

console.log(minValue(numbers));