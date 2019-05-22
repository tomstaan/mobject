from django.db import models



# This is the main objects model.
class Object(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    