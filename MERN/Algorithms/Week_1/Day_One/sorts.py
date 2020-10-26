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
