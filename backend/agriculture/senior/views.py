from rest_framework import viewsets
from rest_framework import permissions
from senior.models import Senior
from .serializers import SeniorSerializer
from drf_yasg.utils import swagger_auto_schema # type: ignore
from django.utils.decorators import method_decorator
from drf_yasg import openapi # type: ignore

# class SeniorView(viewsets.ModelViewSet):

#     queryset = Senior.objects.all()
#     serializer_class = SeniorPostSerializer
#     permission_classes = (permissions.IsAuthenticated,)

class SeniorVillageView(viewsets.ModelViewSet):

    queryset = Senior.objects.all()
    serializer_class = SeniorSerializer
    permission_classes = (permissions.AllowAny,)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'townId': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the village."),
                'senior_name': openapi.Schema(type=openapi.TYPE_STRING, description="Name of the senior."),
                'gender': openapi.Schema(type=openapi.TYPE_STRING, description="Gender of the senior."),
                'main_category': openapi.Schema(type=openapi.TYPE_STRING, description="Main category of the senior."),
                'sub_category': openapi.Schema(type=openapi.TYPE_STRING, description="Sub category of the senior."),
                'occupation': openapi.Schema(type=openapi.TYPE_STRING, description="Occupation of the senior."),
                'intro_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="Introduction image of the senior."),
                'intro_text': openapi.Schema(type=openapi.TYPE_STRING, description="Introduction text about the senior."),
                'house_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="House image of the senior."),
                'senior_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="Image of the senior."),
                'price': openapi.Schema(type=openapi.TYPE_INTEGER, description="Price of the senior."),
                'address': openapi.Schema(type=openapi.TYPE_STRING, description="address of the senior."),
                'place_x': openapi.Schema(type=openapi.TYPE_NUMBER,format=openapi.FORMAT_FLOAT, description="place_x of senior"),
                'place_y': openapi.Schema(type=openapi.TYPE_NUMBER,format=openapi.FORMAT_FLOAT, description="place_y of senior"),
            },
            required=['townId', 'senior_name', 'gender', 'main_category', 'sub_category', 'occupation', 'house_image', 'senior_image', 'intro_text', 'price', 'address', 'place_x', 'place_y'],
            example={
                'townId': 'String',
                'senior_name': 'String',
                'gender': 'String',
                'main_category': 'String',
                'sub_category': 'String',
                'occupation': 'String',
                'intro_image': 'String',
                'house_image': 'binary_data',
                'senior_image': 'binary_data',
                'intro_text': 'String',
                'price': 'Integer',
                'address': 'String',
                'place_x': 'Float',
                'place_y': 'Float',
            }
        ),
        responses={
            201: openapi.Response(
                'Created',
                openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                    'id': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the senior."),
                    'town': openapi.Schema(
                        type=openapi.TYPE_OBJECT,
                        properties={
                            'village_id': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the village."),
                            'village_name': openapi.Schema(type=openapi.TYPE_STRING, description="Name of the village."),
                            'village_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="House image of the village."),
                            'place_x': openapi.Schema(type=openapi.TYPE_NUMBER,format=openapi.FORMAT_FLOAT, description="place_x of village."),
                            'place_y': openapi.Schema(type=openapi.TYPE_NUMBER,format=openapi.FORMAT_FLOAT, description="place_y of village."),
                            'village_detail': openapi.Schema(type=openapi.TYPE_STRING, description="Detail of the village."),
                            'village_category': openapi.Schema(type=openapi.TYPE_STRING, description="category of the village."),
                            'create_at': openapi.Schema(type=openapi.TYPE_STRING, description="Creation timestamp.")
                        }
                    ),
                    'senior_name': openapi.Schema(type=openapi.TYPE_STRING, description="Name of the senior."),
                    'gender': openapi.Schema(type=openapi.TYPE_STRING, description="Gender of the senior."),
                    'main_category': openapi.Schema(type=openapi.TYPE_STRING, description="Main category of the senior."),
                    'sub_category': openapi.Schema(type=openapi.TYPE_STRING, description="Sub category of the senior."),
                    'occupation': openapi.Schema(type=openapi.TYPE_STRING, description="Occupation of the senior."),
                    'intro_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="Introduction image of the senior."),
                    'house_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="House image of the senior."),
                    'intro_text': openapi.Schema(type=openapi.TYPE_STRING, description="Introduction text about the senior."),
                    'senior_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="Image of the senior."),
                    'price': openapi.Schema(type=openapi.TYPE_INTEGER, description="Price of the senior."),
                    'address': openapi.Schema(type=openapi.TYPE_STRING, description="address of the senior."),
                    'place_x': openapi.Schema(type=openapi.TYPE_NUMBER,format=openapi.FORMAT_FLOAT, description="place_x of senior."),
                    'place_y': openapi.Schema(type=openapi.TYPE_NUMBER,format=openapi.FORMAT_FLOAT, description="place_y of senior"),
                    'create_at': openapi.Schema(type=openapi.TYPE_STRING, description="Creation timestamp.")
                    }
                )
            )
        }
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)