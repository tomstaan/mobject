from rest_framework import routers
from .api import ObjectViewSet 


router = routers.DefaultRouter()
router.register('api/objects', ObjectViewSet, 'objects')

urlpatterns = router.urls
