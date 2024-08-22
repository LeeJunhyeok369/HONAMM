from rest_framework import viewsets
from rest_framework import permissions
from review.models import Review
from .serializers import ReviewPostSerializer


class ReviewView(viewsets.ModelViewSet):

    queryset = Review.objects.all()
    serializer_class = ReviewPostSerializer
    permission_classes = (permissions.IsAuthenticated,)