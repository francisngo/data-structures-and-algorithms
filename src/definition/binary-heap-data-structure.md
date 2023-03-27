# What is a Binary Heap data structure?

Very similar to a binary search tree, but with some different rules.

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.

## Max Binary Heap
- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max binary heap the parent is greater than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

In this heap, the value of the root node must be the greatest among all its child nodes and the same thing must be done for its left and right sub-tree. 

## Min Binary Heap
In this heap, the value of the root node must be the smallest among all its child nodes and the same thing must be done for its left and right sub-tree.

## Characteristics of Heap
- Heapify: It is the processs to rearrange the elements to maintain the property of heap data structure. It is done when a certain node creates an imbalance in the heap due to some operations on that node. It takes O(log N) to balance the tree.
    - For max-heap, it balances in such a way that the maximum element is the root of the binary tree
    - For min-heap, it balances in such a way that the minimum element is the root of that binary tree
- Insertion: If we insert a new element into the heap, since we are adding a new element into the heap, it will distort the properties of the heap. So, we need to perform the heapify operation so that it maintains the property of the heap
- Deletion: If we delete the element from the heap, it always deletes the root element on the tree and replaces it with the last element of the tree. Since we delete the root element from the heap, it will distort the properties of the heap. It would need to perform heapify operations so that it maintains the property of the heap.

Advantages of Heaps:
- Fast access to maximum/minimum element - O(1)
- Efficient insertion and deletion operations - O(log n)
- Can be efficiently implemented as an array
- Suitable for real-time applications

Disadvantages of Heaps:
- Not suitable for searching for an element other than the maximum/minimum
- Extra memory overhead to maintain heap structure
- Slower than other data structures like arrays and linked lists for non-priority queue operations.