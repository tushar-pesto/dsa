//given alpha, return true if it is a palindrome

const checkPalindrome = (alpha) => {
    if (typeof alpha !== "string") {
        throw "Invalid input";
    }
    let front = 0
    let n = alpha.length;
    if (n == 1) {
        return true;
    }
    let back = n - 1;
    let mid = n % 2 == 0 ? n / 2 : (n - 1) / 2
    let midIndex = mid - 1;

    for (let i = 0; i <= midIndex; i++) {
        if (alpha[front] !== alpha[back]) {
            return false;
        }
        front++;
        back--;
    }

    return true;
}