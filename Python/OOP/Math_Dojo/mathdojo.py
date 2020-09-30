class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        print('*****************************')
        print('Adding!')
        print(f'Num: {num}, extra numbers: {nums}')
        self.result += num
        for number in nums:
            self.result += number
        print(f'Result: {self.result}')
        return self
    def subtract(self, num, *nums):
        print('*****************************')
        print('Subtracting!')
        print(f'Num: {num}, extra numbers: {nums}')
        self.result -= num
        for number in nums:
            self.result -= number
        print(f'Result: {self.result}')
        return self
    
m_dojo = MathDojo()
m_dojo.add(2).add(5,2,1).add(4,2,2,2).subtract(3,2).subtract(5,2,2).subtract(1,1,1).result()
print(m_dojo)