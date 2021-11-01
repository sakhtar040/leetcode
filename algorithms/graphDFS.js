class GraphDFS {
	constructor(graph) {
		this.graph = graph;
		this.visited = {};
		for (let key of this.graph.keys()) {
			Object.assign(this.visited, { [key]: false });
		}
	}

	dfs(node) {
		this.visited[node] = true;
		let dfs = node;
		let values = this.graph.get(node);
		for (let value of values) {
			if (!this.visited[value]) {
                dfs += this.dfs(value);
			}
		}
		return dfs;
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
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//print graph
graph.printGraph();

const list = graph.getGraph();
const graphDFS = new GraphDFS(list);
console.log(graphDFS.dfs("A"));
