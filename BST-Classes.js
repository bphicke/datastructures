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
            this.root = newNode(val);
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
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.insert(13);
console.log(tree.find(12));
console.log(tree.find(13));