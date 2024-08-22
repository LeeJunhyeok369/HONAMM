# Generated by Django 4.2.14 on 2024-08-21 17:54

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("village", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Senior",
            fields=[
                (
                    "senior_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("senior_name", models.CharField(max_length=50)),
                ("gender", models.CharField(max_length=10)),
                ("main_category", models.CharField(max_length=255)),
                ("sub_category", models.JSONField()),
                ("occupation", models.CharField(max_length=255)),
                (
                    "intro_image",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("intro_text", models.TextField(blank=True, null=True)),
                ("house_image", models.CharField(max_length=255)),
                ("price", models.IntegerField()),
                ("create_at", models.DateTimeField(default=django.utils.timezone.now)),
                (
                    "townId",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="village.village",
                    ),
                ),
            ],
        ),
    ]
