import BinarySearchTree from '../concepts/binary-search-tree'


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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
  // console.log(bst);



//   const bfs = (bst) => {
//     let result = [];
//     let queue = new MyQueue();

//     let current = bst.root;
//     queue.enqueue(current);

//     while (!queue.size == 0) {
//       current = queue.dequeue();
//       result.push(current.value);
//       if (current.left) {
//         queue.enqueue(current.left);
//       }
//       if (current.right) {
//         queue.enqueue(current.right);
//       }
//     }
//     return result;
//   };


//   let y = bfs(bst);
//   console.log(y)

  let attachNode = (root, value) => {
    if (root == null) {
      root = new Node(value);
      return root;
    }
    if (value < root.value) {
      root.left = attachNode(root.left, value);
    } else {
      root.right = attachNode(root.right, value);
    }
    return root;
  };

  let treeFromLevelOrder = (arr) => {
    console.log('here', arr)
    let root = null;
    
    for (let value of arr) {
      root = attachNode(root, value);
    }

    return root;
  };

  let x = treeFromLevelOrder(y);
  console.log(x);
} catch (e) {
  console.warn(e);
}
