# What is a Hash Table data structure?

Hashing consists of finding a value in a data structure in the shortest time possible. When we use a hash function, we already know which position the value is in, so we can simply retrieve it. A hash function is a function that, given a key, will return an address in the table where the value is. 

## Hash table versus hash set

A hash table is the same thing as a hash map. In some programming languages, there is also the hash set implementation. THe hash set data structure consists of a set, but to insert, remove, or get elements, we use a hash function. The difference is that instead of adding a key-value pair, we insert only the value, not the key. Similar to set, the hash set only stores unique values, not repeated ones.

## Handling collisions between hash tables

1. Separate chaining
The separate chaining technique consists of creating a linked list for each position of the table and storing the elements in it. It is the simplest technique to handle collisions; however, requires additional memory outisde of the HashTable instance. 

Hash Table with Linked List
[5] -> [Jonathan | jonathan@email.com] -> [Jamie | jamie@email.com] -> [Sue | sue@email.com] -> [X]
[10] -> [Nathan | nathan@email.com] -> [X]
[13] -> [Donnie | donnie@email.com] -> [Ana | Ana@email.com] -> [X]
[16] -> [Tyrion | tyrion@email.com] -> [Aaron | aaron@email.com] -> [X]

At position 4, we would have a LinkedList instance with three elements in it, at positions 13 and 16, we would have LinkedList instances with two elements in it, and at position 10, we would have LinkedList instances with a single element in it.

For separate chaining and linear probing, we only need to override three methods: put, get, and remove. These three methods will be different in each different technique. 

2. Linear probing
Another technique of collision resolution is linear probing. When we try to add a new element, if the position index is already occupied, then we will try index + 1. If index + 1 is occupied, then we try index + 2, and so on.

## Hash function
The lose lose hash function is not a good hash function, because it creates collisions. We would have multiple collisions if we use this function. A good hash function is composed of certain factors: time to insert and retrieve an element (performance) and also a low probability of collisions. Another simple hash function that is better than lose lose hash function is djb2. 

This consists of initializing the hash variable with a prime number (most implementations use 5381); then, we will iterate the key parameter, multiply the hash value by 33 (magical number), and sum it with the ASCII value of the character.

Finally, we will use the rest of the division of the total by another random prime number (1013 for example)