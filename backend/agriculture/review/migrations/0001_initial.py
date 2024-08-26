# Generated by Django 4.2.14 on 2024-08-26 06:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("reservation", "0001_initial"),
        ("senior", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Review",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                (
                    "review_image",
                    models.ImageField(default=None, upload_to="review_images/"),
                ),
                ("review_text", models.TextField()),
                ("created_at", models.DateTimeField(default=django.utils.timezone.now)),
                (
                    "reserveId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="reservation.reservation",
                    ),
                ),
                (
                    "seniorId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="senior.senior"
                    ),
                ),
                (
                    "userId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
