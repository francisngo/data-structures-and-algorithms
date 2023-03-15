# What is a queue data structure?

A queue is an ordered collection of items that follows the FIFO (First In First Out), also known as the first-come first-served principle. The addition of new elements in a queue is at the tail, and the removal is from the front. The newest element added to the queue must wait at the end of the queue.

- enqueue(element(s)): this adds a new item (or several items) at the back of the queue
- dequeue(): this removes the first item from the queue (the item that is in the front of the queue). It also returns the removed element 
- front(): this returns the first element from the queue, the first one added, and the first one will be removed from the queue. The queue is not modified (it does not remove the element; it only returns the element for information purposes-very similar to the peek method from the Stack data structure)
- isEmpty(): this returns true if the queue does not contain any elements, and false if the queue is bigger than 0
- size(): this returns the number of elements the queue contains. It is similar to the length property of the array