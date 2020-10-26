# Quick Sort Algorithm
# Time Complexity: Best O(n log(n)) Average: O(n log(n)) Worst: o(n^2)
# Space Complexity: Worst: O(log(n))
def quick_sort(list, low=None, high=None):
    length = len(list)
    if length <= 1:
        return list
    else:
        pivot = list.pop() # Pivot point from the end of the list and used that insteadd
        low, high = [], [] # Created my two lists
        for item in list: # loop through the list 
            if item > pivot: 
                high.append(item) # appends to larger than pivot list 
            else:
                low.append(item) # appends to smaller than pivot list
    return quick_sort(low) + [pivot] + quick_sort(low) # recursive call to include the sorted low list, the pivot value, and the sorted high list