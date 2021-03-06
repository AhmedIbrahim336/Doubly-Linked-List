class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.head === null || this.tail === null) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }
  pop() {
    let node;
    if (this.head === null || this.tail === null) {
      return;
    } else if (this.length === 1) {
      node = this.head;
      this.head = this.tail = null;
    } else {
      node = this.tail;
      this.tail = this.tail.prev;
      this.tail.next.prev = null;
      this.tail.next = null;
    }

    this.length--;
    console.log(node);
    return node;
  }

  shift() {
    let node = this.head;
    if (!this.head) return;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }

    this.length--;
    console.log(node);
    return node;
  }
  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return node;
  }

  get(index) {
    if (index >= this.length || index < 0) return false;
    const mid = Math.floor(this.length / 2);
    let counter;
    let currentNode;
    if (index <= mid) {
      counter = 0;
      currentNode = this.head;
      while (counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;
      while (counter > index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    console.log(currentNode);
    return currentNode;
  }

  set(idx, val) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    const node = new Node(val);
    if (idx > this.length || idx < 0) return;
    if (idx === this.length) return this.push(val);
    if (idx === 0) return this.unshift(val);
    let currentNode = this.head.next;
    let prevNode = this.head;
    let counter = 1;
    while (counter < idx) {
      currentNode = currentNode.next;
      prevNode = prevNode.next;
      counter++;
    }
    node.next = currentNode;
    currentNode.prev = node;
    prevNode.next = node;
    node.prev = prevNode;
    this.length++;
    return node;
  }

  remove(idx) {
    if (idx >= this.length || idx < 0) return;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let current = this.head.next;
    let prev = this.head;
    let counter = 1;
    while (counter < idx) {
      prev = current;
      current = current.next;
      counter++;
      console.log(current.val);
    }
    prev.next = current.next;
    current.next.prev = current.prev;
    current.next = null;
    current.prev = null;
  }
}

const DLL = new DoublyLinkedList();
DLL.push('Jone');
DLL.push('Doe');
DLL.push('Jane');
DLL.push('Jake');
DLL.push('ahmed');
DLL.push('hend');
DLL.remove(3);
// console.log(DLL);
