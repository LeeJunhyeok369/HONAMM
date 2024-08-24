import uuid
from django.db import models
from senior.models import Senior
from django.contrib.auth.models import User
from django.utils import timezone

class Reservation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    seniorId = models.ForeignKey(Senior, on_delete=models.CASCADE)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    start_date = models.DateField(help_text="예약 시작 날짜. 형식: YYYY-MM-DD.")
    end_date = models.DateField( help_text="예약 종료 날짜. 형식: YYYY-MM-DD.")
    create_at = models.DateTimeField(default=timezone.now)