export const middle = (list) => {
    let slow = list.head;
    let fast = list.head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}