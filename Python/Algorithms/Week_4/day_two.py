'''
    Recursion
    - Base Case
    - Forward movement
    - Return value or function call
    - Call Stack
    - Pass by value/ reference
'''

# Recursively sum an arr of ints

nums = [1,2,3]
n = len(nums)
# expected = 6

# add params if needed for recursion

def sumArray(nums, n):
    if len(nums) == 1:
        return nums[0]
    else:
        return nums[0] + sumArray(nums[1:], n)

# print(sumArray(nums, n))


'''
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer

    nums1 = 5
    expected1 = 15
    Explanation => (1+2+3+4+5)

    nums2 = 2.5
    expected2 = 3
    Explanation => (1+2)

    num3 = -1
    expected3 = 0
    Explanation => (0-1)
'''
nums1 = -1
def recursive_Sigma(n):
    if n <= 1:
        return n
    else:
        return n + recursive_Sigma(n-1)


print(recursive_Sigma(nums1))