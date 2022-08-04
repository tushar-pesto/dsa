
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

try {

  let input = 'ab-cd+*';
  let ops = ['-', '+', '*', '/']
  let stack = [];

  let treeFromPostfix = (input) => {
    for(let c of input) {
      if(ops.includes(c)) {
        let right = stack.pop();
        let left = stack.pop();
        if(!(right instanceof Node)) {
          right = new Node(right)
        }
        if(!(left instanceof Node)) {
          left = new Node(left)
        }
        let n = new Node(c);
        n.left = left;
        n.right = right;
        stack.push(n)
        console.log(n)
      } else {
        stack.push(c)
      }
    }

    return stack.pop()
  };

  let x = treeFromPostfix(input);
  console.log(x);
} catch (e) {
  console.warn(e);
}
