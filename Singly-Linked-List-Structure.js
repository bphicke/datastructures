// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        if (this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            let temp = new Node(val);
            this.tail.next = temp;
            this.tail = temp;
        }
        this.length += 1;
        return this;
    }
    pop() {
        let current = this.head;
        if (this.length === 0) {
            return null;
        }
        if (this.length === 1) {
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removedNode;
        }
        for (let i = 0; i < this.length - 2; i++) {
            current = current.next;
        }
        let removedNode = this.tail;
        this.tail = current;
        this.tail.next = null;
        this.length -= 1;
        return removedNode;
    }
    shift () {
        if (!this.head) {
            return null;
        }
        let removedHead = this.head;
        this.head = this.head.next;
        this.length -= 1;
        return removedHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length += 1;
        return newNode;
    }
    get(index) {
        if (index > this.length) {
            return null;
        }
        let getNode = this.head;
        for (let i = 0; i < index; i++) {
            getNode = getNode.next;
        }
        return getNode;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")


