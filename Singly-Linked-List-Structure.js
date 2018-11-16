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
        if (index > this.length || index < 0) {
            return null;
        }
        let getNode = this.head;
        for (let i = 0; i < index; i++) {
            getNode = getNode.next;
        }
        return getNode;
    }
    set(index, val) {
        let mutatedNode = this.get(index);
        if (mutatedNode === null) {
            return false;
        }
        mutatedNode.val = val;
        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        if (index === this.length) {
            this.push(val);
            return true;
        }
        let pre = this.get(index - 1);
        let newNode = new Node(val);
        newNode.next = pre.next;
        pre.next = newNode;
        this.length += 1;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        let pre = this.get(index - 1);
        let temp = pre.next;
        pre.next = temp.next;
        this.length -= 1;
        return temp;
    }
    reverse () {
        if (this.length < 2) {
            return this;
        }
        let pre = null;
        let current = this.head;
        let next = current.next;
        this.head = this.tail;
        this.tail = current;
        if (this.length === 2) {
            this.tail.next = null;
            this.head.next = this.tail;
        }
        while(next) {
            current.next = pre;
            pre = current;
            current = next;
            next = next.next;
        }
        current.next = pre;
        return this;
    }
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
console.log(list.push("HELLO"))
console.log(list.push("GOODBYE"))
console.log(list.pop());
console.log(list.push("GOODBYE"))
console.log(list.shift())
console.log(list);
console.log(list.unshift("HELLO"))
console.log(list.get(0))
console.log(list.get(1))
console.log(list.set(1,"GOODBYE!"))
console.log(list.set(2, "This should be false"))
list.push('Second');
list.push('First');
console.log(list);
console.log(list.print());
console.log(list.reverse());
console.log(list.print());
