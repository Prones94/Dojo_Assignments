from django.db import models
from datetime import datetime

class Shows(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=50)
    release_date = models.DateField(null=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)