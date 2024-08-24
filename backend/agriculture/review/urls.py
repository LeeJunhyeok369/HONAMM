from django.urls import path
from review.views import ReviewView
from rest_framework.urlpatterns import format_suffix_patterns

review_list = ReviewView.as_view({
    'post': 'create',
    'get': 'list'
})
review_detail = ReviewView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    path("review_list/", review_list, name='review_list'),
    path("review_list/<uuid:pk>/", review_detail, name='review_detail'), 
])