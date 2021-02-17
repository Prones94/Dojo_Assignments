/**
 * Stacks are LIFO (Last In First Out)
 */

class Stack {
  constructor() {
    this.values = [];
    this.top = 0;
  }

  /**
   * Adds a new value to the top.
   *
   * @param {any} val the value to add
   * @returns {number} the new size of the stack
   */

  push(val) {
    this.values[this.top] = val
    this.top += 1
    return this.top

  }

  /**
   * Removes and returns the top value.
   *
   * @returns {any} the removed top value
   */

  removeTop() {
    this.top -= 1
    return this.values.pop();
  }

  /**
   * Returns whether the stack is empty.
   *
   * @returns {boolean}
   */

  isEmpty() {
    return this.top === 0;
  }

  /**
   * @returns {number} the number of items in the stack
   */

  size() {
    return this.top
  }

  /**
   * Returns, but doesn't remove, the top value.
   *
   * @returns {any} the top value
   */

  peek() {
    return this.values[this.top -1]
  }
}

const stack = new Stack();

console.log(stack.push('this')); // should log 1
// 'this'

stack.push('that');
// 'that'
// 'this'

console.log(stack.size()); // should log 2

console.log(stack.removeTop()); // should log 'that'
// 'this'

console.log(stack.peek()); // should log 'this'

console.log(stack.isEmpty()); // should log false