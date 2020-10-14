from django.db import models
from datetime import datetime


class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData["title"]) == 0 or len(postData["network"]) == 0 or len(postData["release_date"]) == 0 or len(postData["description"]) == 0:
            errors["required_field"] = "Input needed."
        else:
            if len(postData["title"]) < 2:
                errors["title"] = "Title shoudl be at least 2 characters"
            if len(postData["network"]) < 3:
                errors["network"] = "Network should be at least 3 characters"
            if len(postData["description"]) < 10:
                errors["description"] = "Description should be at least 10 characters"
            if postData["release_date"] >= datetime.date(datetime.now()):
                errors["release_date"] = "Please enter a previous date, not todays"
        return errors
        
class Shows(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=50)
    release_date = models.DateField(null=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()