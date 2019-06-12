import os
import datetime
from django.db import models
from django.utils import timezone
#from users.models import Users
from django.core.files import File
from django.conf import settings
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


# This is the main objects model.
class Task(models.Model):
    #created_by = models.ForeignKey(user, on_delete=models.CASCADE)
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=2000)
    is_active = models.BooleanField(default=True)
    like_count = models.BigIntegerField(default=0)
    comment_count = models.BigIntegerField(default=0)
    priority = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        default=1
    )
    deadline = models.DateField(default=datetime.date.today)
    owner = models.ForeignKey(
        User, related_name="tasks", on_delete=models.CASCADE, null=True)
    date_created = models.DateTimeField(auto_now_add=True)
