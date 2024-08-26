from rest_framework import viewsets
from rest_framework import permissions
from reservation.models import Reservation
from .serializers import ReservePostSerializer, ReservationSerializer
from drf_yasg.utils import swagger_auto_schema # type: ignore
from django.utils.decorators import method_decorator
from drf_yasg import openapi # type: ignore

class ReservationView(viewsets.ModelViewSet):

    queryset = Reservation.objects.all()
    serializer_class = ReservePostSerializer
    permission_classes = (permissions.AllowAny,)


    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'seniorId': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the senior."),
                'userId': openapi.Schema(type=openapi.TYPE_INTEGER, description="ID of the user."),
                'start_date': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_DATE, description="Start date of the reservation."),
                'end_date': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_DATE, description="End date of the reservation."),
            },
            required=['seniorId', 'userId', 'start_date', 'end_date'],
            example={
                'seniorId': 'String',
                'userId': 'String',
                'start_date': 'YYYY-MM-DD',
                'end_date': 'YYYY-MM-DD'
            }
        ),
        responses={
            201: openapi.Response(
                'Created',
                openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        'id': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the reservation."),
                        'seniorId': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the senior."),
                        'userId': openapi.Schema(type=openapi.TYPE_INTEGER, description="ID of the user."),
                        'start_date': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_DATE, description="Start date of the reservation."),
                        'end_date': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_DATE, description="End date of the reservation."),
                        'create_at': openapi.Schema(type=openapi.TYPE_STRING, description="Creation timestamp.")
                    }
                )
            )
        }
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
