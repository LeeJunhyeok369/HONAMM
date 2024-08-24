from django.urls import path
from reservation.views import ReservationView
from rest_framework.urlpatterns import format_suffix_patterns

reservation_list = ReservationView.as_view({
    'post': 'create',
    'get': 'list'
})
reservation_detail = ReservationView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    path("reservation_list/", reservation_list, name='reservation_list'),
    path("reservation_list/<uuid:pk>/", reservation_detail, name='reservation_detail'), 
])