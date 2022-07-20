/** 
 * given an array alpha of size n containing integers,
 * find the subarray which has the largest sum
 * return just the sum
*/ 




//kadane
export const kadane = (alpha) => {
    if (!Array.isArray(alpha)) {
        throw "Invalid input"
    }

    let n = alpha.length;

    let globalMaxSum = alpha[0];
    let currentMaxSum = alpha[0];

    for(let i = 1; i<n; i++) {
        currentMaxSum = Math.max(alpha[i], currentMaxSum + alpha[i]);
        if(currentMaxSum > globalMaxSum) {
            globalMaxSum = currentMaxSum;
        }
    }

    return globalMaxSum;

}

