# Selection Sort Algorithm

def selection_sort(lst):
    length = range(0, len(lst) - 1) #Starting length of list

    for i in length: # Loops through the list using its length
        min_value = i # Holds the first index of list
        for j in range((i+1), len(lst)): # loop through all the elements starting at index +1 to the length of list
            if lst[j] < lst[min_value]: # if list at j is less than the temp min value
                min_value = j # switch these variables

        if min_value != i: # If min value no longer is equal to i
            lst[min_value], lst[i] = lst[i], lst[min_value] # Swap the two values
    return lst # Return the sorted list

print(selection_sort([9,4,3,6,13,8,10]))