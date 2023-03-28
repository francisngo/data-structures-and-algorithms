import { dijkstra } from "../../../src/algorithms/graphs/dijkstra";

describe('Dijkstra\'s Algorithm - Shortest Path', () => {
    test('shortest path', () => {
        const graph = [
            [0, 2, 4, 0, 0, 0],
            [0, 0, 2, 4, 2, 0],
            [0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 2],
            [0, 0, 0, 3, 0, 2],
            [0, 0, 0, 0, 0, 0]
        ];

        expect(dijkstra(graph, 0)).toEqual([0, 2, 4, 6, 4, 6]);
    });
});