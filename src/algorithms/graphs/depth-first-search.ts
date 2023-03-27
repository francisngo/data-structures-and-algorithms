import Graph from "../../data-structures/graph";
import { Colors, initializeColor } from "../../utils";

export const depthFirstSearchVisit = (
    u: string | number,
    color: any,
    adjList: any,
    callback: Function
) => {
    color[u] = Colors.GREY;
    if (callback) callback(u);

    const neighbors = adjList.get(u);
    if (neighbors !== undefined) {
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                depthFirstSearchVisit(w, color, adjList, callback);
            }
        }
        color[u] = Colors.BLACK;
    }
}

export const depthFirstSearch = (graph: Graph, callback: Function) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
}