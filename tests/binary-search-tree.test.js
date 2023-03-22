import BinarySearchTree from '../src/binary-search-tree';

describe('BinarySearchTree', () => {
    let tree;

    beforeEach(() => {
        tree = new BinarySearchTree();
    });

    it('starts empty', () => {
        expect(tree.getRoot()).toEqual(null);
    });

    function assertNode(node, key, left, right) {
        if (key != null) {
            expect(node.key).toEqual(key);
        } else {
            expect(node).toEqual(key);
            return;
        }

        if (left != null) {
            expect(node.left.key).toEqual(left);
        } else {
            expect(node.left).toEqual(left);
        }

        if (right != null) {
            expect(node.right.key).toEqual(right);
        } else {
            expect(node.right).toEqual(right);
        }
    }

    test('inserts elements in the BST', () => {
        expect(tree.getRoot()).toEqual(null);

        tree.insert(11);
        tree.insert(7);
        tree.insert(15);
        tree.insert(5);
        tree.insert(3);
        tree.insert(9);
        tree.insert(8);
        tree.insert(10);
        tree.insert(13);
        tree.insert(12);
        tree.insert(14);
        tree.insert(20);
        tree.insert(18);
        tree.insert(25);

        let node = tree.getRoot();
        assertNode(node, 11, 7, 15);
        
        node = node.left;
        assertNode(node, 7, 5, 9);

        node = node.left;
        assertNode(node, 5, 3, undefined);

        node = node.left;
        assertNode(node, 3, undefined, undefined);

        node = tree.getRoot().left.left.right;
        assertNode(node, undefined, undefined, undefined);

        node = tree.getRoot().left.right;
        assertNode(node, 9, 8, 10);

        node = node.left;
        assertNode(node, 8, undefined, undefined);

        node = tree.getRoot().left.right.right;
        assertNode(node, 10, undefined, undefined);

        node = tree.getRoot().right;
        assertNode(node, 15, 13, 20);

        node = node.left;
        assertNode(node, 13, 12, 14);

        node = node.left;
        assertNode(node, 12, undefined, undefined);

        node = tree.getRoot().right.left.right;
        assertNode(node, 14, undefined, undefined);

        node = tree.getRoot().right.right;
        assertNode(node, 20, 18, 25);

        node = node.left;
        assertNode(node, 18, undefined, undefined);

        node = tree.getRoot().right.right.right;
        assertNode(node, 25, undefined, undefined);
    });

    // test('verifies if element exists', () => {
    //     expect(tree.getRoot()).toEqual(null);
    // });

    // test('removes a leaf', () => {
    //     expect(tree.getRoot()).toEqual(null);
    // })
})