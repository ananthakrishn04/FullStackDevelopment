from django.db import models

class person(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    def __str__(self):
        return self.name
    
# Create your models here.

