/**
 * Singly-Linked List Node class
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Singly-Linked List class
 */

class SLL {
  constructor() {
    this.head = null; // the list is initially empty
  }

  insertAtBack(val) {
    const node = new Node(val);

    if(!this.head) {
      this.head = node;
    } else {
      let runner = this.head;

      while(runner.next) {
        runner = runner.next;
      }

      runner.next = node;
    }

    return this;
  }

  /**
   * Determines whether the given value is in the list.
   *
   * @param {any} val the value to find
   * @returns {boolean}
   */
  contains(val){
    // your code here
    // iterate through SLL,
    // check each entry for value
    var current = this.head;
    while(current) {
      if (current.val === val){
        return true
      }
      current = current.next
    }
    return false
  }

  containsRecursive(val, node = this.head) {
    if (node.val === val) return true;
    if (!node) return false;
    return this.containsRecursive(val, node.next);
  }

  /**
   * Removes the last node and returns its value (or null if list is empty).
   *
   * @returns {any|null}
   */

  removeBack() {
    if(this.head === null) return null;
    if (this.head.next === null){
        let valHead = this.head.val;
        this.head = null;
        return valHead;
    }
    let current = this.head;
    while(current.next.next !== null){
        current = current.next
    }
    let val = current.next.val
    current.next = null
    return val
  }

  /**
   * BONUS: Finds and returns the maximum value (or null if list empty) recursively.
   *
   * @param {SLLNode} node
   * @param {SLLNode} maxNode
   * @returns {any|null}
   */

  recursiveMax(node = this.head, maxNode = this.head) {
    // Returns max value of singly linked list
    /*
        BASE CASE:
          -> if tnode is empty return maxNode.val
          RECURSIVE
          -> if node value is greatere than the value of the current maxNode
          -> call the function, with node = next node, and maxNode either the new or current maxNode
    */
    if (node === null) {
      return maxNode.val
    } else {
      if (node.val > maxNode.val) maxNode = node;
      return this.recursiveMax(node.next, maxNode)
    }
  }
}

const list = new SLL();

list.insertAtBack(5);
list.insertAtBack(7);
list.insertAtBack(6);

console.log(list.contains(6)); // should log true
console.log(list.contains(10)); // should log false

console.log(list.removeBack()); // should log 6
list.insertAtBack(20);

console.log(list.recursiveMax()); // should log 20