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
            

# Create two bank accounts
chase = Bank_Account('chase', 40000, 1.6)
boa = Bank_Account('bank of america', 1000, 3.6)

# First account
chase.deposit(500).deposit(1000).deposit(100).withdraw(3500).yield_interest().display_account()

# Second account
boa.deposit(200).deposit(50).withdraw(1000).yield_interest().display_account()


