class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Singly_Linked_List:
    def __init__(self):
        self.head = None

    def add_to_front(self, val):
        new_node = Node(val)
        current_head = self.head
        node.next = current_head
        self.head = new_node
        return self
    
    def print_values(self):
        current_node = self.head
        while (current_node != None):
            print(current_node.value)
            current_node = current_node.next
        return self
    
    def add_to_back(self,value):
        new_node = Node(value)
        current = self.head
        while (current.next != None):
            current = current.next
        current.next = new_node
        return self
    
    


    