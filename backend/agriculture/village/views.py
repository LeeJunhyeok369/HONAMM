from rest_framework import viewsets
from rest_framework import permissions
from village.models import Village
from .serializers import VillagePostSerializer
from drf_yasg.utils import swagger_auto_schema # type: ignore
from django.utils.decorators import method_decorator
from drf_yasg import openapi # type: ignore

class VillageView(viewsets.ModelViewSet):

    queryset = Village.objects.all()
    serializer_class = VillagePostSerializer
    permission_classes = (permissions.AllowAny,)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'village_name': openapi.Schema(type=openapi.TYPE_STRING, description="Name of the village."),
                'village_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="House image of the village."),
                'place_x': openapi.Schema(type=openapi.TYPE_INTEGER, description="place_x of village."),
                'place_y': openapi.Schema(type=openapi.TYPE_INTEGER, description="place_y of village."),
                'village_detail': openapi.Schema(type=openapi.TYPE_STRING, description="Detail of the village."),
                'village_category': openapi.Schema(type=openapi.TYPE_STRING, description="category of the village.")
            },
            required=['village_name', 'village_image', 'place_x', 'place_y', 'village_detail', 'village_category'],
            example={
                'village_name': 'String',
                'village_image': 'binart_data',
                'place_x': 'Integer',
                'place_y': 'Integer',
                'village_detail': 'String',
                'village_category': 'String'
            }
        ),
        responses={
            201: openapi.Response(
                'Created',
                openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                    'village_id': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the village."),
                    'village_name': openapi.Schema(type=openapi.TYPE_STRING, description="Name of the village."),
                    'village_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="House image of the village."),
                    'place_x': openapi.Schema(type=openapi.TYPE_INTEGER, description="place_x of village."),
                    'place_y': openapi.Schema(type=openapi.TYPE_INTEGER, description="place_y of village."),
                    'village_detail': openapi.Schema(type=openapi.TYPE_STRING, description="Detail of the village."),
                    'village_category': openapi.Schema(type=openapi.TYPE_STRING, description="category of the village."),
                    'create_at': openapi.Schema(type=openapi.TYPE_STRING, description="Creation timestamp.")  
                    }
                )
            )
        }
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
