"""
URL configuration for agriculture project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# from drf_yasg.views import get_schema_view
# from drf_yasg import openapi
from rest_framework import permissions
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view # type: ignore
from drf_yasg       import openapi # type: ignore

schema_view = get_schema_view(
    openapi.Info(
        title="조목조목",  # 타이틀
        default_version='v1',   # 버전
        description="조목조목",   # 설명
        contact=openapi.Contact(email="710mango@.com")
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    # swagger
    path(r'swagger(?P<format>\.json|\.yaml)', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path(r'swagger', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path(r'redoc', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc-v1'),

    #django
    path("admin/", admin.site.urls),
    path("agri/accounts/", include("accounts.urls")), # 회원가입, 로그인, 로그아웃, 계정 정보
    path("agri/village/", include("village.urls")),
    path("agri/senior/", include("senior.urls")),
    path("agri/reservation/", include("reservation.urls")),
    path("agri/review/", include("review.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
