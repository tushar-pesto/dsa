class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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

    get isSizeOne() {
        return this.size === 1;
    }

    getNode(index) {
        if (!Number.isInteger(index)) throw 'Invalid index';
        if (index >= this.size) throw 'Index too high';
        if (index < 0) throw 'Index too low';
        if (index < 0 || index >= this.size) return null;

        if (index <= this.size / 2) {

            let counter = 0;
            let current = this.head;

            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        } else {
            let counter = this.size-1;
            let current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
            return current;
        }
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
        if (this.isEmpty) {
            this.head = newNode;
            this.tail = newNode;
        } else { //for nonempty list
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if (this.isEmpty) throw 'List Underflow';

        let toBeRemoved = this.tail;
        if (this.isSizeOne) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = toBeRemoved.prev;
            this.tail.next = prev;
            toBeRemoved.prev = null;
        }

        this.size--;
        return toBeRemoved;
    }

    // add before head
    unshift(value) {
        if (this.size == this.maxSize) throw 'List overflow';

        let newNode = new Node(value);
        if (this.isEmpty) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
        return this;
    }

    // remove head
    shift() {
        if (this.isEmpty) throw 'List Underflow';

        let toBeRemoved = this.head;

        if (this.isSizeOne) {
            this.head = null;
            this.tail = null;
        } else {
        }
        this.head = toBeRemoved.next;
        this.head.prev = null;
        toBeRemoved.next = null;
        

        this.size--;
        return toBeRemoved;
    }

    insert(index, value) {
        if (this.size == this.maxSize) throw "List overflow"
        if (!Number.isInteger(index)) throw 'Invalid index';
        if (index > this.size) throw 'Index too high';
        if (index < 0) throw 'Index too low';

        if (index == this.size) {
            return this.push(value);
        }

        if (index == 0) {
            return this.unshift(value);
        }

        let newNode = new Node(value);
        let previous = this.getNode(index - 1);
        let oldNode = previous.next;

        newNode.next = oldNode;
        oldNode.prev = newNode;
        newNode.prev = previous;
        previous.next = newNode;

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

        let previous = this.getNode(index - 1);
        let oldNode = previous.next;
        let newNext = oldNode.next;

        previous.next = newNext;
        newNext.prev = previous;
        oldNode.next = null;
        oldNode.prev = null;

        this.size--;
        return oldNode;
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
        console.log(aux.join(' <=> '));
        return;
    }
}

export default DoublyLinkedList;

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
