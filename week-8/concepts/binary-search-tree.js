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
}


let bst = new BinarySearchTree();
//   bst.insert(20)
//   bst.insert(15)
//   bst.insert(12)
//   bst.insert(17)
//   bst.insert(25)
console.log(bst)
