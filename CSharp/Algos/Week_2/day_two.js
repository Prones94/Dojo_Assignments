/**
 * A queue is a FIFO (first in, first out) data structure
 */

class Queue {
  constructor() {
    this.values = [];
    this.rear  = 0; // used to store the position in which the next element can be stored
    this.size = 10;
  }

  /**
   * Adds a value and returns the new size.
   *
   * @param {any} val
   * @returns {number} the new size
   */

  enqueue(val) {
   this.values.push(val)
   this.rear += 1
   return this.values.length
  }

  /**
   * @returns {any} the removed (front) value
   */

  dequeue() {
    return this.values.shift()
    this.rear -= 1
  }

  /**
   * @returns {number}
   */

  sizeOfQueue() {
   return this.values.length
  }

  /**
   * @returns {boolean}
   */

  isEmpty() {
    return this.values.length === 0
  }

}

const queue = new Queue();

console.log(queue.enqueue(1)); // should log 1
// 1

console.log(queue.enqueue(2)); // should log 2
// 1 - 2

console.log(queue.dequeue()); // should log 1
// 2

console.log(queue.sizeOfQueue()); // should log 1

console.log(queue.isEmpty()); // should log false