// space complexity
// given an array of integers, return an array with all entries doubled

//naive
const double = (input) => {
    let n = input.length;
    let output = [];
    for(let i = 0; i<n; i++) {
        output[i] = input[i] * 2;
    }

    return output;
}

//better space
const doubleInPlace = (input) => {
    let n = input.length;
    let output = [];
    let output1 = [];
    let output2 = [];
    let output3 = [];
    output[2] = 100
    output[4] = 400
    for(let i = 0; i<n; i++) {
        input[i] = input[i] * 2;
        output1[i] = 1;
    }
    return input;
}

//time complexity
//given a positive integer n, return the sum of all integers from 1 to n.

//naive
const calculateSum = (n) => {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;
}

//better time
const calculateSumFormula = (n) => {
    let sum = n*(n+1)/2;
    return sum;
}