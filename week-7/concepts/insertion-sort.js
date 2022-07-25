

export const insertionSort = (input) => {
    let n = input.length;
    for (let i = 0; i < n; i++) {
        let currentItem = input[i];
        let j = i-1;
  
        while(j>=0 && input[j]>currentItem) {
          input[j+1] = input[j];
          j--;
        }
        input[j+1] = currentItem;
        
    }
    return input;
  }