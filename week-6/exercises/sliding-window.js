/** 
 * given an array alpha of size n containing integers,
 * and a window size m
 * find the subarray of size m which has the largest sum
 * return just the sum
*/


//naive
export const maxSubarray = (alpha, m) => {
    if (!Array.isArray(alpha)) {
        throw "Invalid input"
    }

    let n = alpha.length;
    if (!Number.isInteger(m) || m <= 0) {
        throw "Invalid input"
    }
    if (m > n) {
        throw "m must not be greater than the array length"
    }

    let globalMaxSum = 0;

    for (let i = 0; i < n - m + 1; i++) {
        let currentSum = 0;
        for (let j = 0; j < m; j++) {
            currentSum += alpha[i + j];
        }
        console.log({ currentSum });
        if (currentSum > globalMaxSum) {
            globalMaxSum = currentSum;
        }
    }

    return globalMaxSum;

}



//sliding
export const maxSubarraySliding = (alpha, m) => {
    if (!Array.isArray(alpha)) {
        throw "Invalid input"
    }

    let n = alpha.length;
    if (!Number.isInteger(m) || m <= 0) {
        throw "Invalid input"
    }
    if (m > n) {
        throw "m must not be greater than the array length"
    }

    let globalMaxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < m; i++) {
        globalMaxSum += alpha[i];
    }

    currentSum = globalMaxSum;

    for(let i = m; i<n; i++) {
        currentSum = currentSum - alpha[i-m] + alpha[i];
        globalMaxSum = Math.max(globalMaxSum, currentSum);
    }

    return globalMaxSum;

}

