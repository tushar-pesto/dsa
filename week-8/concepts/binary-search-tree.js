class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    get isEmpty() {
        return this.root === null;
    }


    //iterative version of insert
    /*
        insert(value) {
            let newNode = new Node(value);
            if (this.isEmpty) {
                this.root = newNode;
                return this;
            } else {
                let current = this.root;
                while (true) {
                    if (value < current.value) {
                        if (current.left == null) {
                            current.left = newNode;
                            return this;
                        } else {
                            current = current.left;
                        }
                    } else {
                        if (current.right == null) {
                            current.right = newNode;
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                }
    
            }
        }
    */

    insert(value) {
        if (!Number.isInteger(value)) throw 'Invalid value';
        let newNode = new Node(value);
        if (this.isEmpty) {
            this.root = newNode;
            return;
        } else {
            this.#insertAt(newNode, this.root);
        }
    }

    #insertAt(newNode, currentNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                return;
            } else {
                this.#insertAt(newNode, currentNode.left);
            }
        } else if (newNode.value > currentNode.value) {
            if (!currentNode.right) {
                currentNode.right = newNode;
                return;
            } else {
                this.#insertAt(newNode, currentNode.right);
            }
        } else {
            throw 'Node with this value already exists';
        }
    }

    find(value) {
        if (this.isEmpty) {
            return false;
        }

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }

    delete(value) {
        if (!Number.isInteger(value)) throw 'Invalid value';
        if (this.isEmpty) {
          throw 'Tree underflow';
        }
        let root = this.root;
        if (root.left === null && root.right === null) {
          this.root = null;
          return root;
        } else {
          this.#deleteAt(value, root);
        }
      }
    
      #deleteAt(value, currentNode) {
        if (currentNode == null) {
          throw 'Value not in tree';
          //return currentNode
        }
        if (value < currentNode.value) {
          currentNode.left = this.#deleteAt(value, currentNode.left);
          return currentNode;
        } else if (value > currentNode.value) {
          currentNode.right = this.#deleteAt(value, currentNode.right);
          return currentNode;
        } else { //if (value == currentNode.value)
          console.log('found');
    
          if (currentNode.left == null && currentNode.right == null) {
            console.log('no child');
            currentNode = null;
            return;
          } else if (currentNode.left !== null && currentNode.right === null) {
            console.log('swap with left child');
            console.log(currentNode);
            currentNode = currentNode.left;
            currentNode.left = null;
            console.log(this);
          } else if (currentNode.left === null && currentNode.right !== null) {
            console.log('swap with right child');
            console.log(currentNode);
            currentNode = currentNode.right;
            currentNode.right = null;
            console.log(this);
          } else {
            console.log('swap with successor');
            let successor = currentNode.right;
            while (successor.left !== null) {
              successor = successor.left;
            }
            currentNode.value = successor.value;
            currentNode.right = this.#deleteAt(successor.value, currentNode.right)
          }
        }
    
        return currentNode;
      }
    
}



try {
    let bst = new BinarySearchTree();
    bst.insert(20);
    bst.insert(15);
    bst.insert(12);
    bst.insert(17);
    bst.insert(25);
    bst.insert(22);
    bst.insert(27);
    bst.insert(27);
    console.log(bst);
} catch (e) {
    console.warn(e);
}


export default BinarySearchTree;