from rest_framework import viewsets
from rest_framework import permissions
from village.models import Village
from .serializers import VillagePostSerializer

class VillageView(viewsets.ModelViewSet):

    queryset = Village.objects.all()
    serializer_class = VillagePostSerializer
    permission_classes = (permissions.IsAuthenticated,)
    
