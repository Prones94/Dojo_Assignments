def countdown(num):
    for i in range(num, 0, -1):
        print(i)
# countdown(5)

def print_and_return(list):
    print(list[0])
    return list[1]
# print_and_return([1,2])
# x = print_and_return([1,2])
# print(x)

def first_plus_length(list):
    return(list[0] + len(list))
# x = first_plus_length([1,2,3,4,5])
# print(x)

def values_greater_than_second(list):
    temp = list[1]
    new_list = [];
    if(len(list) < 2):
        return False
    else:
        for item in list:
            if item > temp:
                new_list.append(item)
        print(len(new_list))
        return new_list
# values_greater_than_second([5,2,3,2,1,4])
# x = values_greater_than_second([5,2,3,2,1,4])
# print(x)

def length_and_value(size, value):
    new_list = [];
    for i in range(size + 1):
        new_list.append(value)
    return new_list
# print(length_and_value(4,7))