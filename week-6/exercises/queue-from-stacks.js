import MyStack from '../concepts/my-stack';

class QueueFromStacks {
    constructor() {
        this.inbox = new MyStack();
        this.outbox = new MyStack();
    }

    enqueue(item) {
        // push to inbox
        this.inbox.push(item);
    }

    
    dequeue() {
        // if outbox is empty, pop entire inbox into outbox
        if (this.outbox.size === 0) {
            if (this.inbox.size === 0) {
                throw 'Queue Underflow';
            } else {
                while (this.inbox.size > 0) {
                    let item = this.inbox.pop();
                    this.outbox.push(item);
                }
            }
        }
        // pop from outbox
        let frontItem = this.outbox.pop();
        // console.log('dequeued', frontItem)
        return frontItem;
    }

    get size() {
        return this.inbox.items.length + this.outbox.items.length;
    }

    get isEmpty() {
        return this.size === 0;
    }

    log() {
        console.log('inbox: ', this.inbox.items);
        console.log('outbox: ', this.outbox.items);
    }
}

export default QueueFromStacks;
