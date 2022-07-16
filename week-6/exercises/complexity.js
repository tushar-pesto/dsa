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
    for(let i = 0; i<n; i++) {
        input[i] = input[i] * 2;
    }
    return input;
}