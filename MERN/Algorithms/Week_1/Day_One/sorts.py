def bubbleSort(items):
    is_sorted = True
    counter = 0
    while(is_sorted):
        is_sorted = False
        for i in range(len(items)- counter - 1):
            if items[i] > items[i+1]:
                items[i], items[i+1] = items[i+1]. items[i]
                is_sorted = True
            counter += 1

numsOrdered = [1,2,3,4,5,6,7,8,9,10]
nums_randomOrder = [9,2,5,6,4,3,7,10,1,8]
numsReversed = [10,9,8,7,6,5,4,3,2,1]
expected = [1,2,3,4,5,6,7,8,9,10]

def selection_sort(items):
    items_length = range(0, len(items)-1)
    for i in items_length:
        min_value = i

        for j in range(i+1, len(items)):
            if items[j] < items[min_value]:
                min_value = j
        
        items[min_value], items[i] = items[i], items[min_value]
    return items

def insertion_sort(nums):
    length = range(1, len(nums))
    for i in length:
        unsorted_value = nums[i]
        while nums[i-1] > unsorted_value and i > 0:
            nums[i], nums[i-1] = nums[i-1], nums[i]
            i -= 1
    return nums

# Merge Sort 
# Step 1: Split the list 
def split(arr):
    """
    :param arr:list
    :return left and right lists [left] [right]
    """
    arr_length = len(arr)
    middle = arr_length //2
    return arr[:middle], arr[middle:]

# Step 2: Merge sorted lists
def merge_sorted_list(left, right):
    """
    Linear operation
    O(len(left) + len(right))
    :param left: list
    :param right: list
    return merged list
    """
    # Special: One or both lists are empty
    if len(left) == 0:
        return right
    elif len(right) == 0:
        return left

    # General Case:
    left_idx = right_idx = 0
    merged = [] 
    total_length = len(left) + len(right)
    while len(merged) < total_length:
        if left[left_idx] <= right[right_idx]: # Value on the left list is smaller (or equal)
            merged.append(left[left_idx])
            left_idx += 1
        else: # Right value is bigger
            merged.append(right[right_idx]) 
            right_idx += 1
        if right_idx == len(right):
            merged += left[left_idx:]
            break
        elif left_idx == len(left):
            merged += right[right_idx:]
            break
    return merged

# Step 3 Merge Sort
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        left, right = split(arr)
        return merge_sorted_list(merge_sort(left), merge_sort(right))
        
