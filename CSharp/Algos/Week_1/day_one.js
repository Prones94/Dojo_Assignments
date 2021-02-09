/**
 *  Singly Linked List
 */

 class Node  {
   constructor(value) {
     this.value = value
     this.next = null
   }
 }

 class SLL {
   constructor() {
     this.head = null;
     this.length = 0
   }

   isEmpty(){
     // returns boolean if list is empty or not
     return this.head === null;
   }

   insertAtBack(val) {
     // push value to the end of the linked list
     const newNode = new Node(val)

    if(this.isEmpty()){
      this.head = newNode;
      this.next = null
   } else {
     let current = this.head;
    while(current.next !== null){
      current = current.next
    }
    runner.next = newNode
   }
   return this
  }

  seedfromArr(arr){
    // Adds all array values to the list
    for(let i = 0; i <arr.length; i++) {
      this.insertAtBack(arr[i])
    }
    return this
  }

 }


