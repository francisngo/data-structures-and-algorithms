# What is a Graph data structure? 
A graph is an abstract model of a network structure. A graph is set of nodes (or vertices) connected by edges. Learning about graphs is important because any binary relationship can be represented by a graph. 

Any social network, such as Facebook, Twitter, Google can be represented by a graph. 

We can also use graphs to represent roads, flights, and communications. 

A graph G = (V, E) is composed of:
- V: A set of vertices
- E: A set of edges connecting the vertices in V
 
                      A ____
                    /   \   \
                    B    C -- D 
                   /      \  / \
                   E        G   H
                  /              
                 I

Vertices connected by an edge are called adjacent vertices. For example. A and B are adjacent, A and D are adjacent, A and C are adjacent, and A and E are not adjacent.

A degree of a vertex consists of the number of adjacent vertices. For example, A is connected to three other vertices, therefore A has degree of 3; E is connected to two other vertices, therefore E has degree of 2. 

A path is a sequence of consecutive vertices that are adjacent. Using the graph above, we have the paths "A, B, E, I" and "A, C, D, G" among others. 

A simple path does not contain repeated vertices. As an example, we have the path A, D, G. A cycle is a simple path, except for the last vertex, which is the same as the first vertex: A, D, C, A (back to A). 

A graph is acyclic if it does not have cycles. A graph is connected if there is a path between every pair of vertices. 