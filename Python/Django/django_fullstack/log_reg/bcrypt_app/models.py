from django.db import models
import re

class UserManager(models.Manager):
    def register_validator(self, post_data):
        errors = {}

        #first and last name check
        if len(post_data["first_name"]) < 2 or len(post_data["first_name"]) == 0:
            errors["first_name"] = "Please enter a longer name"
        if len(post_data["last_name"]) < 2 or len(post_data["last_name"]) == 0:
            errors["last_name"] = "Please enter a longer name"
        
        #email check
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$'
        )
        if not EMAIL_REGEX.match(post_data["email"]) or (len(post_data["email"])) == 0:
            errors['email'] = "Invalid email address"
            
        #password length check
        if len(post_data['password']) < 8:
            errors['password'] = 'Password needs to be longer'
        
        #Password don't match
        if (post_data['password'] != post_data['pw_confirm']):
            errors['pw_confirm'] = "Passwords didn't match up. Try Again"
        
        # Check for user uniqueness
        user_list = User.objects.filter(email = post_data['email'])
        if len(user_list) > 0:
            errors['email_password'] = 'Email/password is incorrect, try again.'
        return errors
    
    def login_validator(self, post_data):
        errors = {}
        user_list = User.objects.filter(email=post_data['email'])
        if len(user_list) == 0:
            errors['email_password'] = 'Email/password is incorrect.Try Again'
        else:
            if bcrypt.checkpw(
                post_data['password'].encode(),
                user_list[0].encode()
            ) != True:
                errors['email_password'] = 'Email/password is incorrect. Try Again'
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = UserManager()