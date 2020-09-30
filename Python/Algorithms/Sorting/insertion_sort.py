# Insertion Sorting Algorithm

def insertion_sort(lst):
    length_list = range(1, len(lst))
    for i in length_list:
        value_sort = lst[i]

        while lst[i-1] > value_sort and i > 0:
            lst[i], lst[i-1] = lst[i-1], lst[i]
            i = i - 1
    return lst


print(insertion_sort([7,6,9,19,48,29,1,3,2,5,123]))