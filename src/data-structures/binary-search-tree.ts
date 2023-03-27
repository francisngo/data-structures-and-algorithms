import { Compare, defaultCompare, ICompareFunction } from '../utils';
import { Node } from '../models/node';

export default class BinarySearchTree<T> {
    protected root: Node<T> | null | undefined;

    constructor(protected compareFun: ICompareFunction<T> = defaultCompare) {
        this.root = null;
    }

    insert(key: T) {
        // special case: first key
        // if root is null then node will be added to tree as root
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            // find the correct position in the tree and add the node
            this.insertNode(this.root, key);
        }
    }

    // method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    protected insertNode(node: Node<T>, key: T) {
        // if data is less than the node
        // data move left of the tree
        if (this.compareFun(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                // if left is not null recur until null is found
                this.insertNode(node.left, key);
            }
        // if data is more than the node
        // data move right of the tree
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                // if right is not null recur until null is found
                this.insertNode(node.right, key);
            }
        }
    }

    getRoot() {
        return this.root;
    }

    // searches for specific value
    search(key: T) {
        return this.searchNode(this.root, key);
    }

    // method to search the node with a value in the entire tree
    private searchNode(node: Node<T> | null | undefined, key: T): boolean {
        // if tree is empty return null
        if (node == null) { 
            return false;
        }

        // if data is less than node's data
        // move left
        if (this.compareFun(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        // if data is more than node's data
        // move right
        } else if (this.compareFun(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }
        // key is equal to node.item
        // if data is equal to node's data
        // return true;
        return true;
    }

    // an in-order traversal visits all the nodes of a BST in an ascending order, meaning it will visit the nodes from the smallest to the largest (left to right)
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

    // a post-order traversal visits the node after it visits its descendants. 
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

    // searches for minimum values
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

    // searches for maximum values
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

    // helper method that calls removeNode with a given data
    remove(key: T) {
        this.root = this.removeNode(this.root, key);
    }

    // method to remove node with a given data
    // recurs over the tree to find the data and removes it
    protected removeNode(node: Node<T> | null | undefined, key: T | null | undefined) {
        // if root is null then tree is empty
        if (node == null) {
            return null;
        }
        // if data to be deleted is less than roots data then move to left subtree
        if (this.compareFun(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        // if data to be deleted is greater than roots data then move to right subtree
        } else if (this.compareFun(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        // if data is similar to root's data then delete this node
        } else {
            // key is equal to node.item

            // handle 3 conditions
            // 1 - a leaf node
            // 2 - a node with only 1 child
            // 3 - a node with 2 children

            // case 1
            // delete node with no children
            if (node.left == null && node.right === null) {
                node = null;
                return node;
            }

            // case 2 
            // deleting node with one children
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }

            // case 3
            // deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            const aux = this.minNode(node.right);
            node.key = aux?.key;
            node.right = this.removeNode(node.right, aux?.key);
            return node;
        }
    } 
}