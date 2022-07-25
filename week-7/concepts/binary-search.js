/**
 * Given a sorted array of length n and an item , 
 * search through the array to see if m exists in n​
 * if it does, return its index otherwise return -1
 * use binary search algo
 * */

export const binarySearch = (input, item) => {
    if (!Array.isArray(input)) {
        throw "Invalid input"
    }
    if (!Number.isInteger(item)) {
        throw "Invalid input"
    }

    let n = input.length;
    let start = 0;
    let end = n - 1;
    let mid = Math.floor((start + end) / 2);

    while (input[mid] !== item) {
        // console.log({ start, mid, end });
        if (item < input[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    
    // console.log({ start, mid, end });

    if(input[mid] === item) {
        return mid;
    }
    return -1;
}