reverseList = (list) => {
    if (list.size <= 1) return list;

    let currentNode = list.head;
    let nextNode = null;
    let prevNode = null;

    // swap head and tail
    let tempNode = list.head;
    list.head = list.tail;
    list.tail = tempNode;


    while (currentNode !== null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    list.head = prevNode;

    return list;
}