from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound

# User = get_user_model()

# class CustomRegisterSerializer(RegisterSerializer):
#     phone_number = serializers.CharField(
#         validators=[RegexValidator(regex=r'^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$')],
#         help_text="휴대폰 번호는 다음과 같은 형식을 따라야 합니다: 010-1234-5678"
#     )
#     birthdate = serializers.DateField()

#     def get_cleaned_data(self):
#         data = super().get_cleaned_data()
#         data['phone_number'] = self.validated_data.get('phone_number', '')
#         data['birthdate'] = self.validated_data.get('birthdate', None)
#         return data

#     def save(self, request):
#         user = super().save(request)
#         user.phone_number = self.validated_data.get('phone_number')
#         user.birthdate = self.validated_data.get('birthdate')
#         user.save()
#         return user

#user detail
class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializerWithToken
    permission_classes = [IsAuthenticated]

    def get_object(self):
        username = self.kwargs.get('username')
        try:
            user = User.objects.get(username=username)
            return user
        except User.DoesNotExist:
            raise NotFound(detail="User not found.")
    def delete(self, request, username):
        try:
            user = User.objects.get(username=username)
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except User.DoesNotExist:
            raise NotFound(detail="User not found.")

