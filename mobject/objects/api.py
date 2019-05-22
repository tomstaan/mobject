from .models import Object
from rest_framework import viewsets,permissions
from .serializers import ObjectSerializer

# Object ViewSet
class ObjectViewSet(viewsets.ModelViewSet):
    queryset = Object.objects.all()
    serializer_class = ObjectSerializer
    permission_classes = [
        permissions.AllowAny
    ]
    
