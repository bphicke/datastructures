class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }
        let current = this.root;
        while (current) {
            if (current.value === val) return undefined;
            if (val > current.value) {
                if (current.right === null) {
                    current.right = new Node(val);
                    return this;
                }
                current = current.right;
            } else {
                if (current.left === null) {
                    current.left = new Node(val);
                    return this;
                }
                current = current.left;
            }
        }
    }
    find(val) {
        if (this.root === null) return false;
        let current = this.root;
        while(current) {
            if (current.value === val) return current;
            if (val > current.value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    }
    BFS() {
        let current = this.root;
        if (current === null) return null;
        let visited = [];
        let queue = [];
        queue.push(current);
        while(queue.length) {
            current = queue.shift();
            visited.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return visited;
    }
    DFSPreOrder() {
        let current = this.root;
        let visited = [];
        let traverse = (current) => {
            visited.push(current.value);
            if(current.left) traverse(current.left);
            if(current.right) traverse(current.right);
        }
        traverse(current);
        return visited;
    }
    DFSPostOrder () {
        let current = this.root;
        let visited = [];
        let traverse = (current) => {
            if(current.left) traverse(current.left);
            if(current.right) traverse(current.right);
            visited.push(current.value);
        }
        traverse(current);
        return visited;
    }
    DFSInOrder() {
        let current = this.root;
        let visited = [];
        let traverse = (current) => {
            if(current.left) traverse(current.left);
            visited.push(current.value);
            if(current.right) traverse(current.right);
        }
        traverse(current);
        return visited;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFS());