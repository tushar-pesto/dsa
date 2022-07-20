/**
 * fibonacci
 * given n, return the nth item in the sequence
 * 1-1-2-3-5-8-13-21
 * dynamic solution
 */

export const dynamicFibonacci = (n, memo = {}) => {
    // check if already calculated for n
    if (n in memo) {
        return memo[n];
    } else if (n == 1 || n == 2) { // base case
        return 1;
    } else {
        // store result in cache
        memo[n] = dynamicFibonacci(n - 1, memo) + dynamicFibonacci(n - 2, memo);
        return memo[n];
    }
}
