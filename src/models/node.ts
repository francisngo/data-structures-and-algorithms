export class Node<K> {
    constructor(public key: K | null | undefined, public left?: Node<K> | null, public right?: Node<K> | null) {
        this.left = left;
        this.right = right;
    }

    toString() {
        return `${this.key}`;
    }
}