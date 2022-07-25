/**
 * Given an input array of length n and an item, 
 * search through the array to see if m exists in n​
 * if it does, return its index otherwise return -1
 * */ 

export const linearSearch = (input, item) => {
    if (!Array.isArray(input)) {
        throw "Invalid input"
    }
    if (!Number.isInteger(item)) {
        throw "Invalid input"
    }
    let n = input.length;
    for(let i=0; i<n; i++) {
        let el = input[i];
        if(item === el) {
            return i;
        }
    }
    return -1;
}