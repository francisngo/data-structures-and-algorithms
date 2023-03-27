import Graph from "../../data-structures/graph";
import Queue from "../../data-structures/queue";
import { Colors, initializeColor } from "../../utils";

export const breadthFirstSearch = (graph: Graph, startVertex: any, callback: Function) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();

    queue.enqueue(startVertex);

    while(!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;

        if (neighbors !== undefined) {
            for (let i = 0; i < neighbors.length; i++) {
                const w = neighbors[i];
                if (color[w] === Colors.WHITE) {
                    color[w] = Colors.GREY;
                    queue.enqueue(w);
                }
            }
            color[u] = Colors.BLACK;
            if (callback) callback(u);
        }
    }
}