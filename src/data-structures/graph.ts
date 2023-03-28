import Dictionary from "./dictionaries";

export default class Graph {
    private vertices: (string | number)[] = [];
    private adjList: Dictionary<string | number, (string | number)[]> = new Dictionary();

    constructor(private isDirected = false) {}

    // this method receives a vertex `v` as a parameter. The vertex is added to the list of vertices. 
    addVertex(v: string | number) {
        // if new vertex does not exist, push to vertices array and set an adjacent list with an empty array as a dictionary value of the new vertex.
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []); // initialize adjacent list with array as well
        }
    }

    // this method receives two vertices as parameters. First an edge is added from vertex `a` to vertex `b` by adding `b` to the adjacent list of `a`. 
    addEdge(a: string | number, b: string | number) {
        if (!this.adjList.get(a)) {
            this.addVertex(a);
        }

        if (!this.adjList.get(b)) {
            this.addVertex(b);
        }

        this.adjList.get(a)?.push(b);
        if (this.isDirected !== true) {
            this.adjList.get(b)?.push(a);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }

    // to view graph
    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + ' -> ';
            const neighbors = this.adjList.get(this.vertices[i]);
            if (neighbors !== undefined) {
                for (let j = 0; j < neighbors.length; j++) {
                    s += neighbors[j] + ' ';
                }
                s += '\n';
            }
        }
        return s;
    }
}