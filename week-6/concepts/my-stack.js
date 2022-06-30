
class MyStack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    // get the size of the stack
    size() {
        return this.items.length;
    }

    // add a new item to the top of the stack
    push(newItem) {
        this.items.push(newItem);
        //set pointer
        this.top = newItem;
    }

    // remove an item from the top of the stack
    pop() {
        let currentSize = this.size();

        //nothing to return if the stack is empty
        if (currentSize === 0) return null;

        //set top to null if only 1 item left
        //set it to previous item otherwise
        if(currentSize === 1) {
            this.top = null;
        } else {
            this.top = this.items(currentSize - 2);
        }

        // remove the top item from the stack and return it
        let topItem = this.items.pop();
        return topItem;
    }

    // retun the top item without removing it
    peek() {

        //nothing to return if the stack is empty
        if (currentSize === 0) return null;

        return this.top;

    }
}