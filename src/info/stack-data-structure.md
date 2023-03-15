# What is a stack data structure?

A stack is an ordered collection of items that follows the LIFO (Last In First Out) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top, and the opposite side is known as the base. The newest elements are near the top, and the oldest elements are near the base. 

- push(element): this adds a new item to the top of the stack
- pop(): this removes the top item from the stack and returns the removed element
- peek(): this returns the top element from the stack. The stack is not modified (it does not remove the element; it only returns the element for information purposes)
- isEmpty(): this returns true if the stack does not contain any elements, and false if the size of the stack is bigger than 0
- clear(): this removes all the elements of the stack
- size(): this returns the number of elements that the stack contains. It is similar to the length property of an array.