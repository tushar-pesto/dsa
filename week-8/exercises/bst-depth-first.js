import BinarySearchTree from '../concepts/binary-search-tree'


let preOrderResult = [];
let inOrderResult = [];
let postOrderResult = [];

const preOrder = (node) => {
    if (node !== null) {
        preOrderResult.push(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
    return acc;
};
const inOrder = (node) => {
    if (node !== null) {
        inOrder(node.left);
        inOrderResult.push(node.value);
        inOrder(node.right);
    }
    return acc;
};
const postOrder = (node) => {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        postOrderResult.push(node.value);
    }
    return acc;
};

let preorderIterative = (bst) => {
    if (bst.isEmpty) {
      return [];
    }

    const stack = [];
    const result = [];

    stack.push(bst.root);

    while (stack.length > 0) {
      let current = stack.pop();
      result.push(current.value);
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }

    return result;
  };

try {
    let bst = new BinarySearchTree();
    bst.insert(1000);
    bst.insert(501);
    bst.insert(1501);
    bst.insert(252);
    bst.insert(752);
    bst.insert(1252);
    bst.insert(1752);
    bst.insert(303);
    bst.insert(203);
    console.log(bst);

    let x = preOrder(bst.root);
    let y = inOrder(bst.root);
    let z = postOrder(bst.root);
} catch (e) {
    console.warn(e);
}