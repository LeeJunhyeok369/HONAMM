from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from review.models import Review
from .serializers import ReviewPostSerializer
from drf_yasg.utils import swagger_auto_schema # type: ignore
from django.utils.decorators import method_decorator
from drf_yasg import openapi # type: ignore
import uuid



class ReviewView(viewsets.ModelViewSet):

    queryset = Review.objects.all()
    serializer_class = ReviewPostSerializer
    permission_classes = (permissions.AllowAny,)

    def senior_queryset(self):
        queryset = super().get_queryset()
        senior_id = self.kwargs.get('seniorId')
        if senior_id:
            try:
                # seniorId를 문자열에서 UUID로 변환
                senior_id_uuid = uuid.UUID(str(senior_id))
                queryset = queryset.filter(seniorId=senior_id_uuid)
            except ValueError:
                # UUID 형식이 아닌 경우 빈 쿼리셋 반환
                queryset = queryset.none()
        return queryset
    
    def get_queryset(self):
        queryset = super().get_queryset()
        user_id = self.kwargs.get('userId')
        if user_id:
            try:
                # userId를 정수형으로 변환하여 필터링
                user_id_int = int(user_id)
                queryset = queryset.filter(userId=user_id_int)
            except ValueError:
                # 정수형 변환이 실패할 경우 빈 쿼리셋 반환
                queryset = queryset.none()
        return queryset
    




    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'review_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="Review image of the review."),
                'review_text': openapi.Schema(type=openapi.TYPE_STRING, description="text of the reveiw."),
                'reserveId': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the reservation."),
                'userId': openapi.Schema(type=openapi.TYPE_INTEGER, description="ID of the user."),
            },
            required=['review_image','review_text', 'reserveId', 'userId'],
            example={
                'review_image': 'binart_data',
                'review_text': 'String',
                'reserveId': 'String',
                'userId': 'String',
            }
        ),
        responses={
            201: openapi.Response(
                'Created',
                openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                    'id': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the review."),
                    'reserveId': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_UUID, description="UUID of the reservation."),
                    'userId': openapi.Schema(type=openapi.TYPE_INTEGER, description="ID of the user."),
                    'review_image': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY, description="Review image of the review."),
                    'review_text': openapi.Schema(type=openapi.TYPE_STRING, description="text of the reveiw."),
                    'create_at': openapi.Schema(type=openapi.TYPE_STRING, description="Creation timestamp.")
                    }
                )
            )
        }
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
