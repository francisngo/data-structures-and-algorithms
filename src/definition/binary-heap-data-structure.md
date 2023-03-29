# What is a Binary Heap data structure?

Very similar to a binary search tree, but with some different rules.

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.

## Max Binary Heap
- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max binary heap the parent is greater than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

In this heap, the value of the root node must be the greatest among all its child nodes and the same thing must be done for its left and right sub-tree. 

### Time Complexity of Max Binary Heap
- In a max heap implemented using an array or a list, the peak element can be accessed in constant time, O(1), as it is always located at the root of the heap
- In a max heap implemented using a binary tree, the peak element can also be accessed in O(1) time, as it is always located at the root of the tree.
- A heapify operation can be used to create a max heap from an unsorted array. This is done by starting at the last non-leaf node and repeatedly performing the "heapify down" operation until all nodes satisfy the heap property. The time complexity of heapify in a max heap is O(n). 

### Applications of Max-Heap Data Structure
- Heapsort algorithm: The heap data structure is the basis for the heapsort algorithm, which is an efficient sorting algorithm with a worst case time complexity of O(n log n). The heapsort algorithm is used in various applications, including database indexing and numerical analysis
- Memory management: The heap data structure is used in memory management systems to allocate and deallocate memory dynamically. The heap is used to store the memory blocks, and the heap data structure is used to efficiently manage the memory blocks and allocate them to programs as needed.
Job Scheduling: The heap data structure is used in job scheduling algorithms, where tasks are scheduled based on their priority or deadline. The heap data structure allows efficient access to the highest-priority task, making it a useful data structure for job scheduling applications. 

### Advantages of a Max-Heap Data Structure
- Efficiently maintain the maximum value: A max heap allows constant time access to the maximum element in the heap, which makes it useful in applications where the maximum element needs to be found quickly
- Efficient insert and delete operation: The insert and delete operations in a max heap have a time complexity of O(log n), which makes them efficient for large collections of elements 
- Priority Queues: A max heap can be used to implement a priority queue, which is useful in many applications such as job scheduling, task prioritization, and event-driven simulation
- Sorting: A max heap can be used to implement heapsort, which is an efficient sorting algorithm that has a worst-case time complexity of O(n log n)
- Space efficiency: A max heap can be implemented as an array, which requires less memory compared to other data structures such as binary search tree or a linked list
- Overall, a max heap data structure is a useful and efficient tool for maintaining and manipulating collections of elements, particularly when the maximum element needs to be accessed quickly or when elements need to be sorted or prioritized.

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