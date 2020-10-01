# Singly Linked Lists

## Objectives
- Learn how linked lists work
- Learn more about pointers
- Learn how to traverse through a linked list

## Challenges
1. Adding a Value to the Front
    _Accepts an value as a parameter_
    1. Create a node
    2. Save the reference to the current head node
    3. Set the new node's next to the list's current head
    4. Set the list's head TO the node we created in the last step
    5. Return self to allow for chaining
2. Traversing Through a List
    _Does not pass any value besides self_
    1. Create a pointer to the first node
    2. While the pointer is pointing to a node and None
    3. Prin the value of the pointer
    4. Increment the pointer to the next node, and return self for chaining
3. Traversing Through a List and Adding a Value to the End
    _Accepts an value as a parameter_
    1. Create a new node with the given value
    2. Start an iterator(pointer) at the beginning of the list
    3. Remember to stop the pointer once the next points to None
    4. Increment the pointer to its neighbor until it reaches the last neighbor
    5. The new node becomes the next pointer
    6. __Edge Case__ In case our list is empt, use the add_to_front method!
4. Remove the First Node and Return its Value
5. Remove Last Node and Return Its Value
6. Remove the First Node with Given Value
    - The Node with the Given Value is the First Node
    - The Node with the Given Value is in the Middle of the List
    - The Node with the Given Value is the Last Node
7. Insert a Node with Value _val_ as the nth node in the list
    - _n_ is 0
    - _n_ is the length of the list
    - _n_ is between 0 and the length of the list

