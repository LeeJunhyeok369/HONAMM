import uuid
from django.db import models
from django.utils import timezone
from village.models import Village

class Senior(models.Model):
    senior_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) #id -> UUID
    townId = models.ForeignKey(Village, on_delete=models.CASCADE)
    senior_name = models.CharField(max_length=50) 
    gender = models.CharField(max_length=10)
    main_category = models.CharField(max_length=255)
    sub_category = models.CharField(max_length=255)
    occupation = models.CharField(max_length=255)
    intro_image = models.ImageField(upload_to='senior_images/intro/', null=True, blank=True)
    intro_text = models.TextField(null=True, blank=True)
    house_image = models.ImageField(upload_to='senior_images/house/', default=None)
    senior_image = models.ImageField(upload_to='senior_images/senior/', default=None)
    price = models.IntegerField()
    place_x = models.IntegerField(null=True, blank=True)
    place_y = models.IntegerField(null=True, blank=True)
    create_at = models.DateTimeField(default=timezone.now)

    

