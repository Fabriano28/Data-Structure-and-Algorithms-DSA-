// The Fibonacci Number Algorithm

function fibonacciLoop(count) {
    const fibonacciArr = [0, 1]

    if (typeof count !== "number") { return []; }

    for(let i = 0; i < count - 2; i++){
        const sum = fibonacciArr[i] + fibonacciArr[i+1];
        fibonacciArr.push(sum);
    }

    return fibonacciArr;
}

fibonacciLoop(18);

function fibonacciRecursion(count) {
    if (typeof count !== "number") { return []; }
    
    if (count <= 0) { return []; }

    if (count === 1) { return [0]; }

    if (count === 2) { return [0, 1]; }
    
    const prevResult = fibonacciRecursion(count - 1);
    const nextNumber = prevResult[prevResult.length - 1] + prevResult[prevResult.length - 2];
    return [...prevResult, nextNumber];
}

let fibonacciArr = fibonacciLoop(20);
console.log("1. " + fibonacciArr.join(", "));

fibonacciArr = fibonacciRecursion(20);

console.log("2. " + fibonacciArr.join(", "));