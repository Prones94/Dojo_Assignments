from banks import Bank_Account

class User:
    def __init__(self, name):
        self.name = name
        self.account = Bank_Account(name='', account_balance=0, interest_rate=0)
        self.accounts = {}

    # Create a function to add an extra bank account
    # Use name as key

    def make_deposit(self, name, amount):
        self.account.withdraw += amount
        print(f'{self.name} deposited into {self.account.name}: ${self.account.display_account}')

    def make_withdrawal(self, name, amount):
        self.account.withdraw -= amount
        print(f'{self.name} withdrew from {self.account.name}: ${self.account.display_account}')
        
    def display_user_balance(self, name):
        print(f'{self.name} has ${self.account.display_account}')

    # Create two transfer functions, personal and other clients 
    def transfer_money(self, first_bank, other_user, second_bank, amount):
        self.account.withdraw -= amount
        print(f'You gave ${amount} to {other_user.name} in {other_user.account.name} account')
        other_user.account.account.deposit += amount
        print(f'{other_user.name} was given ${amount} into his {other_user.account.name}')



chance = User('chance')
chance.account = Bank_Account('chase', 1000, 1.4)
print(chance.account.name)