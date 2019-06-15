from rest_framework import serializers
from .models import Task


# Task serializer
class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'is_active',
                  'like_count', 'comment_count', 'completed', 'priority', 'deadline', 'date_created')
