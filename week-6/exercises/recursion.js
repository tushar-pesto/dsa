// factorial
// 5! is 5*4*3*2*1
// can also be written as 5 * 4!

export const factorial = (n) => {
    if (!Number.isInteger(n) || n < 0) {
        throw "Invalid input"
    }
    // console.log("n is now " + n)
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// fibonacci
// given n, return the nth item in the sequence
// 1-1-2-3-5-8-13-21

export const fibonacci = (n) => {
    if (!Number.isInteger(n) || n <= 0) {
        throw "Invalid input"
    }
    if (n == 1 || n == 2) {

        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// gcd
// given m and n, return their greatest common divisor

export const gcd = (m, n) => {
    if (!Number.isInteger(m) || m <= 0) {
        throw "Invalid input"
    }
    if (!Number.isInteger(n) || n <= 0) {
        throw "Invalid input"
    }
    let small = Math.min(m, n);
    let big = Math.max(m, n);
    if (small == 0) {
        return big;
    } else {
        return gcd(small, big % small)
    }
}