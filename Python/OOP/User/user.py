class User:
    def __init__(self, name):
        self.name = name
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        print(f'{self.name} deposited : {amount}')

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        print(f'{self.name} withdrew: {amount}')
        
    
    def display_user_balance(self):
        print(f'{self.name} has ${self.account_balance}')

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        print(f'You gave ${amount} to {other_user.name}')
        other_user.account_balance += amount
        print(f'{other_user.name} was given ${amount}')


charles = User('charles')
megan = User('megan')
rediet = User('rediet')

# Making First User Deposit, Withdraw, and Display Account Balances
charles.make_deposit(100)
charles.make_deposit(200)
charles.make_deposit(200)
charles.make_withdrawal(100)
charles.display_user_balance()

# Make Second User Deposit, Withdraw, and Display 
megan.make_deposit(500)
megan.make_deposit(300)
megan.make_withdrawal(200)
megan.display_user_balance()

# Make Third User Deposit, Withdraw and Display
rediet.make_deposit(300)
rediet.make_withdrawal(50)
rediet.make_withdrawal(10)
rediet.make_withdrawal(100)
rediet.display_user_balance()

# BONUS: First User transfer $$$ to Third User
charles.transfer_money(rediet, 100)
charles.display_user_balance()
rediet.display_user_balance()

