import Graph from "../../data-structures/graph";
import Queue from "../../data-structures/queue";
import { Colors, initializeColor } from "../../utils";

// The BFS algorithm starts traversing the graph from the first specified vertex and visits all its neighbors (adjacent vertices) first, one layer of the graph at a time. In other words, it visits the vertices first widely and then deeply
export const breadthFirstSearch = (graph: Graph, startVertex: any, callback: Function) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    // initialize all vertices to be white (not visited);
    const color = initializeColor(vertices);
    // create a queue to store vertices that need to be visited
    const queue = new Queue();

    // enqueue the given vertex
    queue.enqueue(startVertex);
    
    // remove a vertex from queue 
    // fetch adjacency list that contains all it's neighbors
    // and mark them as grey (discovered but not visited yet)
    while(!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;

        if (neighbors !== undefined) {
            for (let i = 0; i < neighbors.length; i++) {
                const w = neighbors[i];
                // if there are any neighbor vertices that are not yet discovered, mark them as grey and add them to enqueue
                if (color[w] === Colors.WHITE) {
                    color[w] = Colors.GREY;
                    queue.enqueue(w);
                }
            }
            // mark them as visited
            // and use callback to do something with the vertices
            color[u] = Colors.BLACK;
            if (callback) callback(u);
        }
    }
}

// method to find the shortest path(s)
export const BFS = (graph: Graph, startVertex: any) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    const distances: any = {};
    const predecessors: any = {};
    queue.enqueue(startVertex);
  
    for (let i = 0; i < vertices.length; i++) {
      distances[vertices[i]] = 0;
      predecessors[vertices[i]] = null;
    }
  
    while (!queue.isEmpty()) {
        const u = queue.dequeue(),
        neighbors = adjList.get(u);
         color[u] = Colors.GREY;
        if (neighbors !== undefined) {
            for (let i = 0; i < neighbors.length; i++) {
                const w = neighbors[i];
                if (color[w] === Colors.WHITE) {
                    color[w] = Colors.GREY;
                    // distance from v to u
                    distances[w] = distances[u] + 1;
                    // derive a shortest path from v to every other vertex u
                    predecessors[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = Colors.BLACK;
        }
    }
  
    return {
        distances,
        predecessors
    };
}