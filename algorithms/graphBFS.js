class GraphBFS {
	constructor(graph) {
		this.graph = graph;
		this.visited = {};
		for (let key of this.graph.keys()) {
			Object.assign(this.visited, { [key]: false });
		}
		this.queue = [];
	}

	bfs(node) {
		this.visited[node] = true;
		this.queue.push(node);
		let bfs = node;
		while (this.queue.length) {
			let key = this.queue.shift();
			if (key) {
                let values = this.graph.get(key);
				for (let value of values) {
					if (!this.visited[value]) {
						this.visited[value] = true;
                        this.queue.push(value);
                        bfs += value;
					}
				}
			}
		}
		return bfs;
	}
}

class Graph {
	constructor(vertices) {
		this.vertices = vertices;
		this.list = new Map();
	}

	addVertex(vertex) {
		this.list.set(vertex, []);
	}

	addEdge(vertex, edge) {
		this.list.get(vertex).push(edge);
		this.list.get(edge).push(vertex); // comment this line to make graph directed
	}

	printGraph() {
		let keys = this.list.keys();
		for (let key of keys) {
			let values = this.list.get(key);
			let conn = "";
			for (let value of values) {
				conn += value + " ";
			}
			console.log(key + " -> " + conn);
		}
	}

	getGraph() {
		return this.list;
	}
}

let noOfVertices = 6;
let vertices = ["A", "B", "C", "D", "E", "F"];
const graph = new Graph(noOfVertices);

// adding vertices
for (var i = 0; i < vertices.length; i++) {
	graph.addVertex(vertices[i]);
}

// adding edges
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("C", "F");

//print graph
graph.printGraph();

const list = graph.getGraph();
const graphBFS = new GraphBFS(list);
console.log(graphBFS.bfs("A"));
