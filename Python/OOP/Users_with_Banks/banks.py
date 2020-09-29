# Define Bank Account Class
class Bank_Account:
    def __init__(self, name, account_balance, interest_rate):
        self.name = name
        self.account_balance = account_balance
        self.interest_rate = interest_rate
    
    def deposit(self, amount):
        self.account_balance += amount
        return self
    
    def withdraw(self, amount):
        if self.account_balance < amount:
            print(f'Insufficient funds: Charging a $5 fee')
            self.account_balance -= 5
        else:
            self.account_balance -= amount
            return self
    
    def display_account(self):
        print(f'{self.name} balance: {self.account_balance}')
        return self

    def yield_interest(self):
        if self.account_balance <= 0:
            print('Insufficient funds, deposit more money')
        else:
            self.account_balance += self.account_balance * self.interest_rate
            return self
            



