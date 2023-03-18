# What is a stack data structure?

A stack is an ordered collection of items that follows the LIFO (Last In First Out) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top, and the opposite side is known as the base. The newest elements are near the top, and the oldest elements are near the base. 

- push(element): this adds a new item to the top of the stack
- pop(): this removes the top item from the stack and returns the removed element
- peek(): this returns the top element from the stack. The stack is not modified (it does not remove the element; it only returns the element for information purposes)
- isEmpty(): this returns true if the stack does not contain any elements, and false if the size of the stack is bigger than 0
- clear(): this removes all the elements of the stack
- size(): this returns the number of elements that the stack contains. It is similar to the length property of an array.

Real World Examples of Stack Data Structure

- Function calls and recursion: When a function is called, the current state of the program is pushed onto the stack. When the function returns, the state is popped from the stack to resume the previous function's execution
- Undo/Redo operations: The undo-redo feature in various applications uses tacks to keep track of the previous actions. Each time an action is performed, it is pushed onto the stack. To undo the action, the top element of the stack is popped, and the reverse operation is performed.
- Browser History: Web browsers uses stacks to keep track of the web pages visited. Each time a new page is visited, the URL is pushed onto the stack, and when you hit the back button, the previous URL is popped from the stack. 
- Call logs, Emails, Notifications (latest appears first), CD/DVD stand, Stacks of books at a bookstore

Advantages of Stack:
- Efficient memory utilization: Stack uses a contiguous block of memory, making it more efficient in memory utilization as compared to other data structures
- Fast access time: Stack data structure provides fast access time for adding and removing elements as the elements are added and removed from the top of the stack.
- Helps in function calls: Used to store function calls and their states, which helps in efficient implementation of recursive function calls
- Supports backtracking: Supports backtracking algorithms, which are in problem-solving to explore all possible solutions by storing the previous states
- Enables undo/redo operations: Used to enable undo and redo operations in various applications like text editors, graphic design tools and software development environments

Disadvantages of Stack:
- Limited capacity: Stack has a limited capactiy as it can only hold a fixed number of elements. If the stack becomes full, adding new elements may result in stack overflow, leading to loss of data (capacity is limited by how much memory is allocated for the data structure)
- No random access: Does not allow for random access to its elements, and it only allows for adding and removing elements from the top of the stack. To access element in the middle of stack, all elements above it must be removed
- Memory management: Uses a contiguous block of memory, which can result in memory fragmentation if elements are added and removed frequently
- Not suitable for searching or sorting algorithms where applications are required to access elements in the middle of the stack
- Stack overflow and underflow
- Recursive function call limitations: too many recursive calls can lead to stack overflow, resulting in termination of the program.