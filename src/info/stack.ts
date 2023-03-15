export default class Stack<T> {
    private count: number;
    private items: any;

    constructor() {
        this.count = 0;
        this.items = {};
    }

    // adds new elements to the top of the stack (end of the stack)
    push(element: T) {
        this.items[this.count] = element;
        this.count++;
    }

    // removes the last item of the stack
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    // returns the item from the top of the stack
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    // returns true if stack is empty, false otherwise
    isEmpty() {
        return this.count === 0;
    }

    // returns the length of stack
    size() {
        return this.count;
    }

    // empties the stack; removing all its elements 
    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}