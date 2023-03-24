# What is a Tree data structure?

A tree consists of nodes with a parent-child relationship. Each node has a parent (with the exception of the first node at the top) and zero or more children. 

The top node of a tree is called the root. It is the node that does not have a parent. Each element of the tree is called a node. There are internal nodes and external nodes. An internal node is a node with at least one child. A node that does not have children is called an external node or leaf. 

A node can have ancestors and descendants. The ancestors of a node (except the root) are parent, grandparent, great-grandparent, and so on. The descendants of a node are children, grandchildren, great-grandchildren, and so on. 

Another terminology used with trees is the subtree. A subtree consists of a node and its descendants. 

The depth of a node consists of the number of ancestors. 

The height of a node consists of the number of the maximum depth of any node. A tree can also be broken down into levels. 

## Binary Search Tree

Similar to linked lists, there are pointers to represent the connection between the nodes (called edges in tree terminology). When working with doubly linked lists, each node had two pointers: one to indicate the next node and another to indicate the previous node. When working with trees, the same approach applies however, one pointer will point to the left child, and the other one will point to the right child. There is a Node class that will represent each node of the tree. 

## Uses for Trees
- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems

## Adelson-Velskii and Landi's tree (AVL tree)

The AVL tree is a self-balancing tree, meaning the tree tries to self-balance whenever a node is added to it or removed from it. The height of the left or right subtree of any node differs by 1 at most. This means the tree will try to become a complete tree whenever possible while adding or removing a node.

### Calculating the balance factor

In an AVL tree, for every node, we need to calculate the difference between the height of the right-hand side subtree (hr) and the left-hand side subtree(hl). The result of hr - h1 needs to be 0, 1, or -1. If the result is different from these values, it means the tree needs to be balanced. This concept is called the balance factor.
 
The code to calculate the height of a node is:
```
const heightNode = function(node) {
    if (node === null) {
        return -1;
    } else {
        return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    }
}
```

So, if we are inserting a new node in a left-hand side subtree, we will calculate the height and if it is larger than 1 (meaning it is not -1, 0 or 1), then we will balance the left-hand side subtree. Likewise for right-hand side subtree

AVL rotations 
When inserting nodes to an AVL tree, there are two balance processes that can be used: simple rotation or double notation. Between simple rotation and double rotation, there are four scenarios: 
- Right-Right (RR): This is a single rotation to the left
- Left-Left (LL): This is a single rotation to the right
- Left-Right (LR): This is a double rotation to the right
- Right-Left (RL): This is a double rotation to the left