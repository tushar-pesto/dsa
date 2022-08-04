class MyGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vName) {
        if (this.adjacencyList[vName]) {
            throw 'Vertex already exists';
        }
        this.adjacencyList[vName] = new Set();
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            throw `${v1} doesn't exist`;
        }
        if (!this.adjacencyList[v2]) {
            throw `${v2} doesn't exist`;
        }
        this.adjacencyList[v1].add(v2);
        this.adjacencyList[v2].add(v1);
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            throw `${v1} doesn't exist`;
        }
        if (!this.adjacencyList[v2]) {
            throw `${v2} doesn't exist`;
        }
        this.adjacencyList[v1].delete(v2);
        this.adjacencyList[v2].delete(v1);
    }

    removeVertex(vName) {
        if (!this.adjacencyList[vName]) {
            throw "Vertex doesn't exist";
        }
        let vSet = this.adjacencyList[vName];
        for (let v of vSet) {
            this.removeEdge(v, vName);
        }

        delete this.adjacencyList[vName];
    }

    depthFirst(start) {
        let visited = new Set();
        let list = this.adjacencyList;
        let result = [];

        let dft = (vertex) => {
            // console.log('called with ', vertex);
            if (!vertex) {
                throw 'Invalid input';
            }
            result.push(vertex);
            visited.add(vertex);
            let neighbors = list[vertex];
            // console.log(...neighbors);
            neighbors.forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    return dft(neighbor);
                }
            });
        };

        dft(start);
        return result;
    }

    depthFirstIterative(start) {
        let visited = new Set();
        let list = this.adjacencyList;
        let result = [];

        let stack = [start];
        visited.add(start);

        while(stack.length) {
            let vertex = stack.pop();
            result.push(vertex)

            list[vertex].forEach(neighbor => {
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    stack.push(neighbor)
                }
            })
        }

        return result;

    }

    depthFirstSearch(start, key) {
        let visited = new Set();
        let list = this.adjacencyList;
        let found = false;

        let dfs = (vertex) => {
            if (!vertex) {
                throw 'Invalid input';
            }
            if (vertex == key) {
                found = true;
                // console.log('found', vertex)
                return;
            }
            // console.log('here', vertex)
            visited.add(vertex);
            let neighbors = list[vertex];
            neighbors.forEach((neighbor) => {
                if (found == true) return;
                if (!visited.has(neighbor)) {
                    return dfs(neighbor);
                }
            });
        };

        dfs(start);

        return found;
    }

    breadthFirst(start) {
        let visited = new Set();
        visited.add(start);
        let queue = [start];
        let result = [];

        let currentVertex;

        while (queue.length) {
            currentVertex = queue.shift(); //dequeue
            result.push(currentVertex);
            let neighbors = this.adjacencyList[currentVertex];
            neighbors.forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor); //enqueue
                }
            });
        }

        return result;
    }

    breadthFirstSearch(start, key) {
        let visited = new Set();
        visited.add(start);
        let queue = [start];
        let found = false;

        let currentVertex;

        while (queue.length) {
            currentVertex = queue.shift(); //dequeue
            if (currentVertex == key) {
                found = true;
                break;
            }
            let neighbors = this.adjacencyList[currentVertex];
            neighbors.forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor); //enqueue
                }
            });
        }

        return found;
    }

    log() {
        // console.log(this.adjacencyList)
        let list = this.adjacencyList;
        for (let v in list) {
            console.log('Node', v, ':', [...list[v]]);
        }
    }
}

export default MyGraph;
