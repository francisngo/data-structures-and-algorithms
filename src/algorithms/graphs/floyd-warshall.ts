/*

The Floyd-Warshall algorithm is a dynamic programming algorithm to calculate all the shortest paths on a graph. With this algorithm, we can find the shortest path from all the sources to all the vertices. 

*/

export const floydWarshall = (graph: number[][]) => {
    const distance: number[][] = [];
    const length = graph.length;

    for (let i = 0; i < length; i++) {
        distance[i] = [];
        for (let j = 0; j < length; j++) {
            if (i === j) {
                distance[i][j] = 0;
            } else if (!isFinite(graph[i][j])) {
                distance[i][j] = Infinity;
            } else {
                distance[i][j] = graph[i][j];
            }
        }
    }

    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (distance[i][k] + distance[k][j] < distance[i][j]) {
                    distance[i][j] = distance[i][k] + distance[k][j];
                }
            }
        }
    }

    return distance;
}