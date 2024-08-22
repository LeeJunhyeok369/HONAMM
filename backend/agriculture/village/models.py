import uuid
from django.db import models
from django.utils import timezone

class Village(models.Model):
    village_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) # id -> UUID
    village_name = models.CharField(max_length=255, unique=True) # 마을 이름
    village_image = models.ImageField(upload_to='village_images/', default=None)
    place_x = models.IntegerField()
    place_y = models.IntegerField()
    village_details = models.JSONField() # 마을 상세 내용
    village_category = models.CharField(max_length=200) # 카테고리
    create_at = models.DateTimeField(default=timezone.now) # 만든 시간




