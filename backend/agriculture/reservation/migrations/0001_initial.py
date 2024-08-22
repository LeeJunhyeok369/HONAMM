# Generated by Django 4.2.14 on 2024-08-21 18:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("senior", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Reservation",
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
                ("start_date", models.DateField()),
                ("end_date", models.DateField()),
                ("create_at", models.DateTimeField(default=django.utils.timezone.now)),
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
