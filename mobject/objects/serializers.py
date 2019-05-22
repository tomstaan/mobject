from rest_framework import serializers 
from .models import Object


#object serializer
class ObjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Object
        fields = ('id', 'title', 'description','is_active', 'like_count', 'comment_count', 'date_created')
