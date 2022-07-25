const merge = (alpha, beta) => {
    if (!Array.isArray(alpha)) {
        throw "Invalid input"
    }
    if (!Array.isArray(beta)) {
        throw "Invalid input"
    }

    let i = 0, j = 0;
    let n = alpha.length;
    let m = beta.length;

    let aux = [];
    while (i < n && j < m) {
        if (beta[j] > alpha[i]) {
            aux.push(alpha[i]);
            i++;
        } else {
            aux.push(beta[j]);
            j++;
        }
    }
    while (i < n) {
        aux.push(alpha[i]);
        i++;
    }
    while (j < m) {
        aux.push(beta[j]);
        j++;
    }

    return aux;
}

export const mergeSort = (input) => {
    let n = input.length;

    if (n <= 1) return input;

    let mid = Math.floor(n / 2);
    // console.log({ input, n, mid })
    let left = mergeSort(input.slice(0, mid));
    let right = mergeSort(input.slice(mid));
    return merge(left, right);
}