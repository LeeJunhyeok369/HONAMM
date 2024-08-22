from rest_framework import viewsets
from rest_framework import permissions
from reservation.models import Reservation
from .serializers import ReservePostSerializer


class ReservationView(viewsets.ModelViewSet):

    queryset = Reservation.objects.all()
    serializer_class = ReservePostSerializer
    permission_classes = (permissions.IsAuthenticated,)
