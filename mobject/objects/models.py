import os
import datetime
from django.db import models
from django.utils import timezone
#from users.models import Users
from django.core.files import File
from django.conf import settings



# This is the main objects model.
class Object(models.Model):
    #created_by = models.ForeignKey(user, on_delete=models.CASCADE)
    title = models.CharField(blank=True, max_length=128)
    description = models.CharField(blank=True, max_length=2000)
    is_active = models.BooleanField(default=True)
    like_count = models.BigIntegerField(default=0)
    comment_count = models.BigIntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True, blank=True)

    #def __str__(self):
    #    return self.object_title

    #class Meta:
    #    verbose_name_plural = "objects"
