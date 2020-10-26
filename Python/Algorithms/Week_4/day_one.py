'''
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
'''

def findPair(arr, num):
    if len(arr) < 2:
        return False
    else:
        start = 0
        end = len(arr) - 1
        while start < end:
            if arr[start] + arr[end] == num:
                return True
            elif arr[start] + arr[end] < num:
                start += 1
            else:
                end -= 1
        return False

print(findPair([10,5,47,15],17))

'''
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was[1, 2, 3, 4, 5], the expected output would be[120, 60, 40, 30, 24]. If our input was[3, 2, 1], the expected output would be[2, 3, 6].

Solution:
first time going through the array, it's beginning to the end. p keeps a running total of the product, and each element will equal the running total of the products of the elements that came before. then the 2nd time going through the array, you're doing the same process, but backwards, finishing off the result by multiplying the elements that came after.

'''


def productArr(arr):
    # arr_length = len(arr)
    # # Base Case
    # if arr_length == 1:
    #     return 1
    # i, temp = 1, 1
    # # Create memory for the product array
    # product = [1 for i in range(arr_length)]

    # # Loop: Temp varaibel contains product of elements on left side, excluding arr[i]
    # for i in range(arr_length):
    #     product[i] = temp
    #     temp *= arr[i]
    # # Initialize temp to 1 for products on right side 
    # temp = 1

    # # Loop: Temp variable cotnains product for elements on right side excluding arr[i]
    # for i in range(arr_length - 1, -1, -1):
    #     product[i] *= temp
    #     temp *= arr[i]

    # # print product array
    # for i in range(arr_length):
    #     print(product[i], end = " ")

    # return
    ######################################################################
    # p = 1
    # n = len(arr)
    # output = []
    # for i in range(0,n):
    #     output.append(p)
    #     p = p * arr[i]
    # p = 1
    # for i in range(n-1,-1,-1):
    #     output[i] = output[i] * p
    #     p = p * arr[i]
    # return output
    #############################################################################
    #output = []
    # Store "left products" in output
    # for n in nums:
    #     output.append(output[-1]*n if output else n)
    # right = None
    # # As we iterate backwards, compute running "right product" and use it to compute each output element.
    # i = len(nums) - 1
    # while i >= 0:
    #     right = right*nums[i+1] if right != None else 1
    #     output[i] = output[i-1]*right if i-1 >= 0 else right
    #     i -= 1
    # return output
print(productArr([1, 2, 3, 4, 5]))
print(productArr([10,5,8,4,9,3]))


    
