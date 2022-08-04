import BinarySearchTree from '../concepts/binary-search-tree'
import MyQueue from '../../week-6/concepts/my-queue';

export const levelOrder = (bst) => {
    let result = [];
    let queue = new MyQueue();


    let current = bst.root;
    queue.enqueue(current);

    while (!queue.size == 0) {
        current = queue.dequeue();
        result.push(current.value);
        if (current.left) {
            queue.enqueue(current.left);
        }
        if (current.right) {
            queue.enqueue(current.right);
        }
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

    let x = levelOrder(bst.root);
} catch (e) {
    console.warn(e);
}