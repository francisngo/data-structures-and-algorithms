# What is a Doubly Linked List data structure? 

The difference between a doubly linked list and a normal linked list is that in a linked list, we make the link from one node to the next one only, while in the doubly linked list, we have a double link: one for the next element and one for the previous element

              node                         node                      node
         --------------------      --------------------      --------------------
head -> |      | item | next | -> |      | item | next | -> |      | item | next | -> null
     <- | prev |      |      | <- | prev |      |      | <- | prev |      | tail |
         --------------------      --------------------      ---------------------

The double linked list provides us with two ways to iterate the list: from the beginning to its end or vice versa. We can also go the next element or the previous element of a particular node. In the singly linked list, when we are iterating the list and we miss the desired element, we need to go back to the beginning of the list and start iterating it again. This is one of the advantages of the doubly linked list.