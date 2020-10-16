from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    def register_validator(self, post_data):
        errors = {}

        if len(post_data['username']) < 2:
            errors["username"] = "Username should be at least 2 characters"

        # if len(post_data['last_name']) < 2:
        #     errors["last_name"] = "Last name should be at least 2 characters"

        # email
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Email/password is incorrect. Please try again."

        # password length
        if len(post_data['password']) < 8:
            errors["password"] = "Password should be at least 8 characters"

        # check password == password confirm
        if (post_data['password'] != post_data['password_confirm']):
            errors['password_confirm'] = "Password confirm didn't match"

        user_list = User.objects.filter(email=post_data['email'])
        if (len(user_list) > 0):
            errors['email_password'] = 'Email/password is incorrect. Please try again.'
        return errors

    def login_validator(self, post_data):
        errors = {}
        # check the email
        # check the pw
        users_list = User.objects.filter(email=post_data['email'])
        # check the email is in the db
        if len(users_list) == 0:
            errors['email_password'] = "Email/password is incorrect. Please try again."
        return errors



class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = UserManager()

class Messages(models.Model):
    user = models.ForeignKey(User, related_name="messages", on_delete = models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class Comments(models.Model):
    user = models.ForeignKey(User, related_name="comments", on_delete = models.CASCADE)
    message = models.ForeignKey(Messages, related_name="comments", on_delete = models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)



