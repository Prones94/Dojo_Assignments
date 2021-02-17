// Create a SLL Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

// Creating the Queue class
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val){
    let newNode = new Node(val)
    if(!this.first) {
      this.first = newNode
      this.last = newNode
      this.size++
      return this.size
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this.size
  }

  dequeue(){
    if(!this.first) return null
    let temp = this.first
    if(this.first === this.last){
      this.last = null
    } else {
      this.first = this.first.next
      this.size--
    }
    return temp.value
  }

  isEmpty(){
    // returns a boolean value
    return this.size === 0
  }

  sizeOfQueue(){
    return this.size
  }
}

let queue = new Queue()
console.log(queue.enqueue(1));
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.sizeOfQueue())
