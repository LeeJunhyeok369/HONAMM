import uuid
from django.db import models
from senior.models import Senior
from django.contrib.auth.models import User
from django.utils import timezone

class Reservation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    seniorId = models.ForeignKey(Senior, on_delete=models.CASCADE)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    create_at = models.DateTimeField(default=timezone.now)