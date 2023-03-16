import { defaultEquals } from "./utils";
import { Node } from './models/linked-list-models';

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = undefined;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null || undefined) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node !== null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        // check for out-of-bounds values
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            // if we add an element at the beginning of list
            if (index === 0) {
                // replace the head with the node by assigning node.next to point to current and assigning the head to the node
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                // make a reference to the element that comes before the current element
                const prev = this.getElementAt(index - 1);
                // because prev.next was pointing the the next node or the end (tail), we want to assign the incoming node's next to the prev's next
                node.next = prev.next;
                // and then assign the prev's next to the node being inserted.
                prev.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        // a valid index would be from 0 to the size of the list
        // if it is not a valid position, we return undefined (meaning no element was removed from the list);
        if (index >= 0 && index < this.count) {
            // current will be the pointer as we iterate through the list
            // starting at the head of list 
            let current = this.head;
            
            // if the node we are looking for is at the beginning
            // remove the first element by assigning head to the current.next
            if (index === 0) {
                this.head = current.next;
            } else {
                // make reference to element that comes before the current element
                const prev = this.getElementAt(index - 1);
                current = prev.next;
                // link previous with current's next: skip it to remove
                prev.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.size() && current !== null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count;
    }

    getHead() {
        return this.head;
    }

    clear() {
        this.head = undefined;
        this.count = 0;
    }

    toString() {
        if (this.head == null || undefined) {
            return '';
        }

        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current !== null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}