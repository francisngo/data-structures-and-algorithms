/*

Dijkstra's algorithm is a greedy algorithm to calculate the shortest path between a single source and all the other sources, meaning it can be used to calculate the shortest path from a graph vertex to all the other vertices.

*/

const INF = Number.MAX_SAFE_INTEGER;

// this method will search for the minimum value in the distance array and return the array index that contains the minimum value
const minDistance = (distance: number[], visited: boolean[]) => {
    let min = INF;
    let minIndex = -1;

    for (let v = 0; v < distance.length; v++) {
        if (visited[v] === false && distance[v] <= min) {
            min = distance[v];
            minIndex = v;
        }
    }

    return minIndex;
}

export const dijkstra = (graph: number[][], src: number) => {
    const distance: number[] = [];
    const visited: boolean[] = [];
    const length = graph.length;

    // initialize all distances as infinite
    // and visited as false
    for (let i = 0; i < length; i++) {
        distance[i] = INF;
        visited[i] = false;
    }

    // set distance of source vertex from itself as 0
    distance[src] = 0;

    // find the shortest path for all vertices
    for (let i = 0; i < length - 1; i++) {
        // select the minimum distance vertex from the set of verticees that has yet to be processed
        const u = minDistance(distance, visited);

        // mark as visited so it does not get calculated twice
        visited[u] = true;

        // in case a shortest path is found, set the new value for the shortest path
        for (let v = 0; v < length; v++) {
            if (!visited[v] && graph[u][v] !== 0 && distance[u] !== INF && distance[u] + graph[u][v] < distance[v]) {
                distance[v] = distance[u] + graph[u][v];
            }
        }
    }

    // after all vertices are processed, return the result containing shortest path value from vertex source to all other vertices of graph
    return distance;
}