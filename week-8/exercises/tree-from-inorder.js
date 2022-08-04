
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

try {

  let input = [1, 2, 3, 4, 5, 6, 7, 8];

  let treeFromInorder = (input, start, end) => {
    if (start > end) {
      return null;
    }

    let i = Math.floor(start + (end - start) / 2);
    let node = new Node(input[i]);

    if (start == end) {
      return node;
    }

    node.left = treeFromInorder(input, start, i - 1);
    node.right = treeFromInorder(input, i + 1, end);

    return node;
  };

  let len = input.length - 1;
  let x = treeFromInorder(input, 0, len);

  console.log(x);
} catch (e) {
  console.warn(e);
}
