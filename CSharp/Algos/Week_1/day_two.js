class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SLL {
  constructor() {
    this.head = null
  }

  isEmpty() {
    return this.head === null;
  }
  // 4
  // <4 - 3 - 5>
  unshift(value) {
    /*
    Inserts a new node at the beginning of the singly linked list

    declare a new node
    check if list is empty
      let head become new node
    else
      new node next points to old head
      new head points to new node
    return list
    */
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    return this
  }

  shift() {
    /*
      Removes the head node of the singly linked list

      check if list is empty
        if empty return undefined
      have a variable point to the current head
      point head variable to the current nodes next value
      return that removed variable
    */
    if (this.isEmpty()) return undefined;
    let current = this.head
    this.head = current.next
    return current
  }

  getAverage() {
    let sum = 0
    let count = 0
    let avg = 0;
    if (this.isEmpty()) return 0

    let current = this.head
    while(current !== null){
      count++
      sum = current.value
      current = current.next
    }
    avg = sum/count
    return avg;
  }
}

const list = new SLL();

list.unshift(1);
console.log(list.head.value); // should log 1

list.unshift(2);
console.log(list.head.value);
list.unshift(4);
console.log(list.head.value);
list.unshift(5);

console.log(list.getAverage()); // should log 1.5

list.unshift(3);
console.log(list.head.value); // should log 3

console.log(list.getAverage()); // should log 2

list.shift();
list.shift();

console.log(list.getAverage()); // should log 1