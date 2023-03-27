import { Compare, defaultCompare, ICompareFunction } from "../utils";
import BinarySearchTree from "./binary-search-tree";
import { Node } from "../models/node";

enum BalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHTLY_UNBALANCED_LEFT = 4,
    UNBALANCED_LEFT = 5,
};

export default class AVLTree<T> extends BinarySearchTree<T> {
    constructor (protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn);
    }

    private getNodeHeight(node: Node<T> | null | undefined): number {
        if (node == null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    private getBalanceFactor(node: Node<T>) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1: 
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2: 
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    // left left case: rotate right
    private rotateLL(node: Node<T> | null | undefined) {
        const temp = node?.left;
        if (node != null) {
            node.left = temp?.right;
        }
        if (temp != null) {
            temp.right = node;
        }
        return temp;
    }

    // right right case: rotate left
    private rotateRR(node: Node<T> | null | undefined) {
        const temp = node?.right;
        if (node != null) {
            node.right = temp?.left;
        }
        if (temp != null) {
            temp.left = node;
        }
        return temp;
    }

    // left right case: rotate left then right
    private rotateLR(node: Node<T> | null | undefined) {
        if (node != null) {
            node.left = this.rotateRR(node.left);
            return this.rotateLL(node);
        }
    }

    private rotateRL(node: Node<T> | null | undefined) {
        if (node != null) {
            node.right = this.rotateLL(node.right);
            return this.rotateRR(node);
        }
    }

    insert(key: T) {
        this.root = this.insertNode(this.root, key);
    }

    protected insertNode(node: Node<T> | null | undefined, key: T) {
        if (node == null) {
            return new Node(key);
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else {
            node.right = this.insertNode(node.right, key);
        }

        // verify if tree is balanced
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node?.left?.key) === Compare.LESS_THAN) {
                // left left case
                node = this.rotateLL(node);
            } else {
                // left right case
                node = this.rotateLR(node);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node?.right?.key) === Compare.BIGGER_THAN) {
                // right right case
                node = this.rotateRR(node);
            } else {
                // right left case
                node = this.rotateRL(node);
            }
        }
        return node;
    }

    protected removeNode(node: Node<T> | null | undefined, key: T) {
        node = super.removeNode(node, key);
        if (node == null) {
            return node;
        }

        // verify if tree is balanced
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node?.left?.key) === Compare.LESS_THAN) {
                // left left case
                node = this.rotateLL(node);
            } else {
                // left right case
                node = this.rotateLR(node);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node?.right?.key) === Compare.BIGGER_THAN) {
                // right right case
                node = this.rotateRR(node);
            } else {
                // right left case
                node = this.rotateRL(node);
            }
        }
        return node;
    }
}