from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from dj_rest_auth.serializers import LoginSerializer as DefaultLoginSerializer
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.core.validators import RegexValidator
from django.contrib.auth import get_user_model

# User = get_user_model()

# class CustomRegisterSerializer(RegisterSerializer):
#     phoneNumberRegex = RegexValidator(regex=r'^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$')
#     phone_number = serializers.CharField(validators=[phoneNumberRegex],help_text="휴대폰 번호는 다음과 같은 형식을 따라야 합니다: 010-1234-5678")
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


# user detail
class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('pk', 'username','email', 'token',)

    def get_token(self, obj):
        refresh = RefreshToken.for_user(obj)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
    

    
class UserLoginSerializer(DefaultLoginSerializer):
    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        
        if not email or not password:
            raise serializers.ValidationError(
                {'non_field_errors': ['Must include "email" and "password".']}
            )
        
        user = authenticate(email=email, password=password)
        if not user:
            raise serializers.ValidationError(
                {'non_field_errors': ['Unable to log in with provided credentials.']}
            )
        
        attrs['user'] = user
        return attrs