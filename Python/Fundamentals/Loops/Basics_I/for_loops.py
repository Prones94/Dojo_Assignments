# Basic print 0 to 150
def basic():
    for i in range(0,151):
        print(i)
# basic()

# Multiples of Five
def multiples():
    for i in range(5,1005,5):
        print(i)
# multiples()

# Counting, the Dojo Way
def counting():
    for i in range(0,101):
        if i % 10 == 0:
            print("Coding Dojo")
        elif i % 5 == 0:
            print("Coding")
        else:
            print(i)
# counting()

# Whoa. That sucker's huge
def huge():
    total = 0
    for num in range(1,500001,2):
        total += num
    print(total)
# huge()

# Countdown by Fours
def fours():
    for i in range(2018,0,-4):
        print(i)
# fours()

# Flexible Counter
def flexible(lowNum, highNum, mult):
    for num in range(lowNum, highNum + 1):
        if num % mult == 0:
            print(num)
flexible(2,9,3)