import { Compare, defaultCompare, ICompareFunction } from "./utils";
import BinarySearchTree from "./binary-search-tree";
import { Node } from "./models/node";

enum BalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHT_UNBALANCED_LEFT = 4,
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
}