/* -------------------------------------------------------------------------- */
/*               Singly LinkedList Implementation in Javascript               */
/* -------------------------------------------------------------------------- */

/* --- create a class Node which stores data and pointer to the next node --- */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
/* -- create another class LinkedList which stores head of the linked list -- */
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  traverse() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += "[" + currentNode.data + "] -> ";
      currentNode = currentNode.next;
    }
    console.log(string + "null");
  }
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  insert(value, position = null) {
    if (position === 0) {
      this.head = new Node(value, this.head);
    } else if (position === null) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.next === null) {
          currentNode.next = new Node(value);
          return;
        }
        currentNode = currentNode.next;
      }
    } else {
      let currentNode = this.head;
      let previousNode = null;
      let index = 0;

      while (currentNode && index < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        index++;
      }
      previousNode.next = new Node(value, currentNode);
    }
  }
  delete(value) {
    if (this.head && this.head.data === value) {
      this.head = this.head.next;
      return;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.next.data === value) {
          currentNode.next = currentNode.next.next;
          return;
        }
        currentNode = currentNode.next;
      }
    }
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(4);
const node4 = new Node(5);
const node5 = new Node(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const linkedList = new LinkedList(node1);

linkedList.traverse();
console.log(linkedList.search(4));
console.log(linkedList.search(7));
linkedList.insert(7);
linkedList.traverse();
linkedList.insert(0, 0);
linkedList.traverse();
linkedList.insert(3, 3);
linkedList.traverse();
linkedList.delete(0);
linkedList.traverse();
linkedList.delete(6);
linkedList.traverse();
linkedList.delete(7);
linkedList.traverse();
