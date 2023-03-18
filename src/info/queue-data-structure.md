# What is a queue data structure?

A queue is an ordered collection of items that follows the FIFO (First In First Out), also known as the first-come first-served principle. The addition of new elements in a queue is at the tail, and the removal is from the front. The newest element added to the queue must wait at the end of the queue.

- enqueue(element(s)): this adds a new item (or several items) at the back of the queue
- dequeue(): this removes the first item from the queue (the item that is in the front of the queue). It also returns the removed element 
- front(): this returns the first element from the queue, the first one added, and the first one will be removed from the queue. The queue is not modified (it does not remove the element; it only returns the element for information purposes-very similar to the peek method from the Stack data structure)
- isEmpty(): this returns true if the queue does not contain any elements, and false if the queue is bigger than 0
- size(): this returns the number of elements the queue contains. It is similar to the length property of the array

Real World Examples of Queue:
- Job Scheduling: The computer has a task to execute a particular number of jobs that are scheduled to be executed one after another. These jobs are assigned to the processor one by one which is organized using a queue
- ATM Booth, Ticket Line, Key press sequence on the keyboard, CPU task scheduling, customers waiting time at call centers

Advantages of Queue:
- A large amount of data can be managed efficiently with ease
- Operations such as insertion and deletion can be performed with ease as it follows the first in first out rule.

Disadvantages of Queue:
- The operations such as insertion and deletion of elements from the middle are time consuming
- Queues are not readily searchable. Searching an element takes O(n) time
- Maximum size of queue must be defined prior (max capacity needs to be defined upfront - undesirable usability complexity)
