import { defaultEquals } from "./utils";
import LinkedList from "./linked-list";
import { DoublyNode } from './models/linked-list-models';

export default class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    push(element) {
        const node = new DoublyNode(element);
        if (this.head == null || undefined) {
            this.head = node;
            this.tail = node;
        } else {
            // attach to the tail node 
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }

    insert(element, index) {
        // check for out-of-bound values
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.next;
                    this.head.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) { // last item
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            } 
            this.count++;
            return true;
        }
        return false;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }
}