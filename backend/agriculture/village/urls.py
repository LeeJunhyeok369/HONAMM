from django.urls import path
from village.views import VillageView
from rest_framework.urlpatterns import format_suffix_patterns

village_list = VillageView.as_view({
    'post': 'create',
    'get': 'list'
})
village_detail = VillageView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    path("village_list/", village_list, name='village_list'),
    path("village_list/<uuid:pk>/", village_detail, name='village_detail'), 
])

