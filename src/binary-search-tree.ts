import { Compare, defaultCompare, ICompareFunction } from './utils';
import { Node } from './models/node';

export default class BinarySearchTree<T> {
    protected root: Node<T> | null | undefined;

    constructor(protected compareFun: ICompareFunction<T> = defaultCompare) {
        this.root = null;
    }

    insert(key: T) {
        // special case: first key
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    protected insertNode(node: Node<T>, key: T) {
        if (this.compareFun(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else if (node.right == null) {
            node.right = new Node(key);
        } else {
            this.insertNode(node.right, key);
        }
    }

    getRoot() {
        return this.root;
    }

    search(key: T) {
        return this.searchNode(this.root, key);
    }

    private searchNode(node: Node<T> | null | undefined, key: T): boolean {
        if (node == null) { 
            return false;
        }

        if (this.compareFun(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFun(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }
        // key is equal to node.item
        return true;
    }

    // an in-order traversal visits all the nodes of a BST in an ascending order, meaning it will vist the nodes from the smallest to the largest
    inOrderTraverse(callback: Function) {
        this.inOrderTraverseNode(this.root, callback);
    }

    // Callback function can be used to perform the action to execute when the node is visited (visitor pattern)
    private inOrderTraverseNode(node: Node<T> | null | undefined, callback: Function) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // a pre-order traverseal visits the node prior to its descendants
    // difference between in-order and pre-order is that the pre-order one visits the root node first, then the left, and finally the right node
    preOrderTraverse(callback: Function) {
        this.preOrderTraverseNode(this.root, callback);
    }

    private preOrderTraverseNode(node: Node<T> | null | undefined, callback: Function) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    // 
    postOrderTraverse(callback: Function) {
        this.postOrderTraverseNode(this.root, callback);
    }

    private postOrderTraverseNode(node: Node<T> | null | undefined, callback: Function) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min() {
        return this.minNode(this.root);
    }

    protected minNode(node: Node<T> | null | undefined) {
        let current = node;
        while (current != null && current.left != null ) {
            current = current.left;
        }
        return current;
    }

    max() {
        return this.maxNode(this.root);
    }

    protected maxNode(node: Node<T> | null | undefined) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current; 
    }

    remove(key: T) {
        this.root = this.removeNode(this.root, key);
    }

    protected removeNode(node: Node<T> | null | undefined, key: T | null | undefined) {
        if (node == null) {
            return null;
        }

        if (this.compareFun(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFun(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // key is equal to node.item

            // handle 3 conditions
            // 1 - a leaf node
            // 2 - a node with only 1 child
            // 3 - a node with 2 children

            // case 1
            if (node.left == null && node.right === null) {
                node = null;
                return node;
            }

            // case 2 
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }

            // case 3
            const aux = this.minNode(node.right);
            node.key = aux?.key;
            node.right = this.removeNode(node.right, aux?.key);
            return node;
        }
    } 
}