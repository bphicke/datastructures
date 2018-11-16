class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
    pop() {
        if (this.length === 0) {
            return null;
        }
        let poppedNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return poppedNode;
    }
}

const list = new DoublyLinkedList();
list.push('one');
list.push('two');
list.push('three');
console.log(list.pop());

