# Biggie Size
def biggie_size(nums):
    for item in nums:
        if(item > 0):
            item = "big"
        print(item)
# biggie_size([-1, 3, 5, -5])

# Count Positives
def count_positives(nums):
    size = len(nums)
    last_num = nums[size - 1]
    positive = 0
    for num in nums:
        if num > 0:
            positive += 1
    last_num = positive
    return nums
    
# Sum Total
def sum_total(nums):
    sum = 0
    for i in nums:
        sum += i
    return sum

# Average 
def average(nums):
    return sum(nums) / len(nums)

# Minimum
def minimum(lst):
    return False if len(lst) <= 0 else return min(lst)

# Maximum
def maximum(lst):
    False if len(lst) <= 0 else max(lst)

def ultimate(lst):
    length = len(lst)
    total = sum(lst)
    average = total / length
    smallest = min(lst)
    largest = max(lst)
    return dict([('Sum Total', total), ('Average', average), ('Minimum', smallest), ('Maximum', largest), ('Length', length)])

def reverse_list(lst):
    lst[0] ,lst[-1] = lst[-1], lst[0]
    return lst

