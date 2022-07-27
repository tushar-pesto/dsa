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
        if(!Number.isInteger(index)) throw "Invalid index"
        if(index < 0 || index >= this.size) return null;
        
        //index starts from 0
        let counter = 0;
        let current = this.head;

        //traverse till index is reached
        while(counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    setNode(index, value) {
        if(!Number.isInteger(index)) throw "Invalid index"
        let node = this.getNode(index);
        if(node) {
            node.value = value;
            return true;
        }
        return false;
    }

    push(value) {
        if(this.size == this.maxSize) {
            throw "List overflow"
        }

        let newNode = new Node(value);

        //for empty list
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        //for nonempty list
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if (!this.head) {
            throw "List Underflow"
        }

        let current = this.head;
        let newTail = current;

        //keep traversing till 2nd last item
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
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
        if(this.size == this.maxSize) {
            throw "List overflow"
        }

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
        if (!this.head) {
            throw "List Underflow"
        }

        let currentHead = this.head;

        this.head = currentHead.next;
        this.size--;
        if (this.isEmpty) {
            this.tail = null;
        }
        return currentHead;
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