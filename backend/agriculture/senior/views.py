from rest_framework import viewsets
from rest_framework import permissions
from senior.models import Senior
from .serializers import SeniorPostSerializer


class SeniorView(viewsets.ModelViewSet):

    queryset = Senior.objects.all()
    serializer_class = SeniorPostSerializer
    permission_classes = (permissions.IsAuthenticated,)
