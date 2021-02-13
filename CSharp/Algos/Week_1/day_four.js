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
    this.length = 0;
  }

  checkLength() {
    return this.length
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

    this.length++
    return this;
  }

  /**
   * Returns the second to last value.
   *
   * @returns {any|null} the second-to-last value (or null if empty)
   */

  secondToLast() {
    // Create runner
    let current = this.head
    // If there is no current or the value of current.next is null
    if (current.val === null || current.next === null) {
      return null
    }
    //Traverse through the list
    while (current.val !== null) {
      // If the following node after the next node is null, then return the current nodes value
      if (current.next.next == null) {
        return current.val
      }
      // Otherwise move current to the next node
      current = current.next
    }
  }

  /**
   * Removes the value and returns a confirmation.
   *
   * @param {any} val
   * @returns {boolean} confirmation of success
   */

  removeVal(val) {
    if (!this.head) { return false; }
    else if (this.head.val === val) {
      this.head = this.head.next;
      return true
    } else {
      for(let current = this.head; current.next; current = current.next){
        if(current.next.val === val){
          current.next = current.next.next;
          return true
        }
      }
      return false
    }

  }

  /**
   * BONUS
   * Adds the given value before a specified value and returns confirmation
   *
   * @param {any} insertVal the value to insert
   * @param {any} beforeVal the value to prepend to
   * @returns {boolean} confirmation of success
   */

  prepend(insertVal, beforeVal) {
    if(!this.head){
      return false
    } else if(this.head.val === beforeVal){
      let head = new SLLNode(insertVal);
      head.next = this.head;
      return true;
    } else {
      for(let runner = this.head; runner.next; runner = runner.next){
        if(runner.next.val === beforeVal){
          let newNode = new SLLNode(insertVal)
          newNode.next = runner.next;
          runner.next = newNode;
          return true;
        }
      }
      return false
    }
  }
}

const list = new SLL();
list.insertAtBack(1);
// 1

console.log(list.secondToLast()); // should log null

list
  .insertAtBack(2)
  .insertAtBack(3)
  .insertAtBack(4);
// 1 -> 2 -> 3 -> 4

console.log(list.secondToLast()); // should log 3
console.log(list.removeVal(10)); // should log false

console.log(list.prepend(5, 3)); // should log true
// 1 -> 2 -> 5 -> 3 -> 4

console.log(list.head.next.next.val); // should log 5