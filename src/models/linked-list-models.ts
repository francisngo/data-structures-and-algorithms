export class Node<T> {
    constructor(public element: T, public next?: Node<T>) {
        this.element = element;
        this.next = next;
    }
}

export class DoublyNode<T> extends Node<T> {
    constructor(public element: T, public next?: DoublyNode<T>, public prev?: DoublyNode<T>) {
        super(element, next);
        this.prev = prev;
    }
}