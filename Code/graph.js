class Graph {
	constructor() {
		this.vertices = [];
		this.adjacent = {};
		this.edges = 0;
	}

	addVertex(v) {
		this.vertices.push(v);
		this.adjacent[v] = [];
	}

	addEdge(v, w) {
		this.adjacent[v].push(w);
		this.adjacent[w].push(v);
		this.edges++;
	}

	dfs(goal, v = this.vertices[0], traversed = []) {
		let adj = this.adjacent;
		traversed[v] = true;

		for (const adjacent of adj[v]) {
			if (!traversed[adjacent]) {
				this.dfs(goal, adjacent, traversed);
			}
		}
		return traversed[goal] || false;
	}

	bfs(goal, v = this.vertices[0]) {
		let adj = this.adjacent;
		let queue = [v];
		let traversed = [];
		while (queue.length) {
			let vertex = queue.pop();
			if (vertex === goal) return true;

			for (const adjacent of adj[v]) {
				if (!traversed[adjacent]) {
					traversed[vertex] = true;
					queue.unshift(adjacent);
				}
			}
		}

		return false;
	}

    dfsTopSort () {
        let traversed = [];
        let topNums = {};
        let n = this.vertices.length;

        const topSortHelper = (v, n, traversed, topNums) => {
            for(const neighbour of this.adjacent[v]) {
                if(!traversed[v])
                    n = topSortHelper(neighbour, n, traversed, topNums);
            }

            topNums[n] = v;
            return n - 1;
        }

        for(const v of this.adjacent) {
            if(!traversed[v])
                n = topSortHelper(v, n, traversed, topNums);
        }

        return topNums;
    }
} 

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
// g.addVertex("F");
// g.addVertex("G");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");

// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("A", "D");
// g.addEdge("B", "C");
// g.addEdge("B", "D");
// g.addEdge("C", "D");
// g.addEdge("C", "E");
// g.addEdge("D", "F");
// g.addEdge("F", "G");

console.log(g.adjacent);
