from django.urls import path, include
from accounts.views import UserDetailView

urlpatterns = [
    path("registration/", include("dj_rest_auth.registration.urls")), #회원가입
    path('', include('dj_rest_auth.urls')),
    path('mypage/<str:username>/', UserDetailView.as_view(), name='user_detail'), # 사용자 계정 정보
]