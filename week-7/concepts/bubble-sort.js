
const swap = (input, x, y) => {
    let temp = input[x];
    input[x] = input[y];
    input[y] = temp;
}

export const bubbleSort = (input) => {
    let n = input.length;
    for (let i = n; i > 0; i--) {
        for (j = 0; j < i - 1; j++) {
            // console.log(input, input[j]);

            if (input[j] > input[j + 1]) {
                swap(input, j, j + 1);
            }
        }
    }
    return input;
}