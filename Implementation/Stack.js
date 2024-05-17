class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const stk = new Stack();
console.log(stk.push(1));
console.log(stk.push(2));
console.log(stk.push(3));
console.log(stk.first);
console.log(stk.last);
console.log(stk.size);
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
