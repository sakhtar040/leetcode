class Graph {
    constructor(graph) {
        this.graph = graph;
        this.visited = {};
    }

    detectCycle(node) {
        for(let vertices in this.graph) {
            this.visited[vertices] = 1;
            for(let edge of this.graph[vertices]) {
                if(this.detectCycleUtil(edge)) {
                    return true;
                }
            }
            this.visited[vertices] = 0;
        }
        console.log(this.visited)
        return false;
    }

    detectCycleUtil(edge) {
        if(this.visited[edge] == 2) {
            return true;
        }

        this.visited[edge] = 1;
        for(let node of this.graph[edge]) {
            if(this.visited[node] == 1) {
                this.visited[node] = 2;
            } else {
                if(this.detectCycleUtil(node)) {
                    return true;
                }
            }
        }
        return false;
    }
}

const adjMatrix = [['A', 'B'], ['A', 'D'], ['B', 'C'], ['D', 'E'], ['E', 'F']];

const createAdjList = (adjMatrix) => {
    let adjList = {}

    for(let node of adjMatrix) {
        const [v, e] = node;

        if(!(v in adjList)) {
            adjList[v] = []
        }
        if(!(e in adjList)) {
            adjList[e] = []
        }

        adjList[v].push(e);
        adjList[e].push(v);
    }
    return adjList;
}
let adjList = createAdjList(adjMatrix);
console.log(adjList)
const graph = new Graph(adjList);

console.log(graph.detectCycle('A'));