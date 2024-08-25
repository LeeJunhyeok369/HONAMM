import uuid
from django.db import models
from reservation.models import Reservation
from senior.models import Senior
from django.contrib.auth.models import User
from django.utils import timezone

class Review(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    reserveId = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    seniorId = models.ForeignKey(Senior, on_delete=models.CASCADE)
    review_image = models.ImageField(upload_to='review_images/', default=None)
    review_text = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
