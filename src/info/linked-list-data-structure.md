# What is a linked list data structure?

Linked lists store a sequential collection of elements; but unlike arrays, in linked lists, the elements are not placed contiguously in memory. Each element consists of a node that stores the element iteself and also a reference that points to the next element. 

              node               node              node
         -------------      -------------      -------------
head -> | item | next | -> | item | next | -> | item | next | -> null
         -------------      -------------      -------------

One of the benefits of a linked list over a conventional array is that we do not need to shift elements over when adding or removing them. However, we need to use pointers when working with a linked list. Another detail in the array is that we can directly access any element at any position; with the linked list, if we want to access an element from the middle, we need to start from the beginning (head) and iterate the list until we find the desired element.