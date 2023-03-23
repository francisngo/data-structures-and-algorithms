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