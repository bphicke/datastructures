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
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length -= 1;
        poppedNode.prev = null;
        return poppedNode;
    }
    shift() {
        if (this.length === 0) {
            return null;
        }
        let removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length -= 1;
        removedNode.next = null;
        return removedNode;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }
    get(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        let counter;
        let current;
        if (index < (this.length - 1) / 2) {
            counter = 0;
            current = this.head;
            while(counter != index) {
                current = current.next;
                counter += 1;
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while(counter != index) {
                current = current.prev;
                counter -= 1;
            }
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode === null) return false;
        foundNode.val = val;
        return true;
    }
    insert (index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        let newNode = new Node(val);
        let pre = this.get(index - 1);
        newNode.prev = pre;
        newNode.next = pre.next;
        pre.next.prev = newNode;
        pre.next = newNode;
        this.length += 1;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        let pre = this.get(index - 1);
        let removedNode = pre.next;
        let after = removedNode.next;
        pre.next = after;
        after.prev = pre;
        removedNode.next = null;
        removedNode.prev = null;
        this.length -= 1;
        return removedNode;
    }
}

const list = new DoublyLinkedList();
list.push('one');
list.push('two');
list.push('three');
console.log(list.pop());
list.push('three');
list.push('four');
console.log(list.shift());
console.log(list.unshift('first'));
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
console.log(list)

