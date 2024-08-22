from django.urls import path
from senior.views import SeniorView
from rest_framework.urlpatterns import format_suffix_patterns

senior_list = SeniorView.as_view({
    'post': 'create',
    'get': 'list'
})
senior_detail = SeniorView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    path("senior_list/", senior_list, name='senior_list'),
    path("senior_list/<uuid:pk>/", senior_detail, name='senior_detail'), 
])