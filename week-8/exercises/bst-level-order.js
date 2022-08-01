import BinarySearchTree from '../concepts/binary-search-tree'
import MyQueue from '../../week-6/concepts/my-queue';

export const lot = (bst) => {
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