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
        while (true) {
            if (val > current.value) {
                if (!current.right) {
                    current.right = new Node(val);
                    return this;
                }
                current = current.right;
            } else {
                if (!current.left) {
                    current.left = new Node(val);
                    return this;
                }
                current = current.left;
            }
        }
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log(tree.insert(13));