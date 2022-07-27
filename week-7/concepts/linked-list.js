class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = 10;
    }

    get isEmpty() {
        // return !this.head;
        return this.size === 0;
    }

    getNode(index) {
        if (!Number.isInteger(index)) throw 'Invalid index';
        if (index > this.size) throw 'Index too high';
        if (index < 0) throw 'Index too low';
        if (index < 0 || index >= this.size) return null;

        //index starts from 0
        let counter = 0;
        let current = this.head;

        //traverse till index is reached
        while (counter !== index) {
            console.log(counter, current);
            current = current.next;
            counter++;
        }

        return current;
    }

    setNode(index, value) {
        let node = this.getNode(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    push(value) {
        if (this.size == this.maxSize) throw 'List overflow';

        let newNode = new Node(value);

        //for empty list
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else { //for nonempty list
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if (!this.head) throw 'List Underflow';


        let current = this.head;
        let newTail = current;

        //keep traversing till 2nd last item
        while (current.next) {
            console.log('before', current);
            newTail = current;
            current = current.next;
            console.log('after', current);
        }

        // set tail to the 2nd last item
        this.tail = newTail;

        //sever connection
        this.tail.next = null;
        this.size--;
        if (this.isEmpty) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // add before head
    unshift(value) {
        if (this.size == this.maxSize) throw 'List overflow';

        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
        return this;
    }

    // remove head
    shift() {
        if (!this.head) throw 'List Underflow';

        let currentHead = this.head;

        this.head = currentHead.next;
        this.size--;
        if (this.isEmpty) {
            this.tail = null;
        }
        return currentHead;
    }

    insert(index, value) {
        if (this.size == this.maxSize) throw "List overflow"
        if (!Number.isInteger(index)) throw 'Invalid index';
        if (index > this.size) throw 'Index too high';
        if (index < 0) throw 'Index too low';

        if (index == this.size) {
            this.push(value);
            return true;
        }

        if (index == 0) {
            this.unshift(value);
            return true;
        }

        let prev = this.getNode(index - 1);
        let oldNode = prev.next;
        let newNode = new Node(value);

        newNode.next = oldNode;
        prev.next = newNode;

        this.size++;
        return true;

    }

    remove(index) {
        if (this.isEmpty) throw "List underflow"
        if (!Number.isInteger(index)) throw 'Invalid index';
        if (index >= this.size) throw 'Index too high';
        if (index < 0) throw 'Index too low';

        if (index == this.size - 1) {
            this.pop();
            return true;
        }

        if (index == 0) {
            this.shift();
            return true;
        }

        let prev = this.getNode(index - 1);
        let oldNode = prev.next;
        let newNext = oldNode.next;

        prev.next = newNext;

        this.size--;
        return oldNode;

    }

    reverse() {
        if (this.size <= 1) return this;

        //swap head and tail
        let tempNode = this.head;
        this.head = this.tail;
        this.tail = tempNode;

        let nextNode;
        let prevNode = null;

        for (let i = 0; i < this.size; i++) {
            nextNode = tempNode.next;
            tempNode.next = prevNode;
            prevNode = tempNode;
            tempNode = nextNode;
        }

        return this;
    }



    log() {
        let aux = [];
        if (this.isEmpty) {
            console.log('---empty---');
            return;
        }
        aux.push(this.head.value);
        let current = this.head;
        while (current.next) {
            let nextNode = current.next;
            aux.push(nextNode.value);
            current = nextNode;
        }
        console.log(aux.join(' -> '));
        return;
    }
}

export default SinglyLinkedList;

// try {
//     let list = new SinglyLinkedList();
//     list.push(11);
//     list.push(22);
//     list.push(33);
//     list.push(44);
//     list.push(55);
//     list.push(77);

//     list.shift()
//     list.shift()
//     list.shift()
//     list.shift()
//     list.shift()

//     console.log(list)



//     list.log();
// } catch (e) {
//     console.warn(e)
// }
