export const nthFromLast = (list, index) => {
    let slow = list.head;
    let fast = list.head;

    let counter = 0

    while (counter <= index) {
        fast = fast.next;
        counter++;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}