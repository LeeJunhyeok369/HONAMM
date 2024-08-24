# Generated by Django 4.2.14 on 2024-08-22 13:09

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Village",
            fields=[
                (
                    "village_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("village_name", models.CharField(max_length=255, unique=True)),
                (
                    "village_image",
                    models.ImageField(default=None, upload_to="village_images/"),
                ),
                ("place_x", models.IntegerField()),
                ("place_y", models.IntegerField()),
                ("village_details", models.CharField(max_length=255)),
                ("village_category", models.CharField(max_length=200)),
                ("create_at", models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
