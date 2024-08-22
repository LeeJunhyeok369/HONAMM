# Generated by Django 4.2.14 on 2024-08-21 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("senior", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="senior",
            name="senior_image",
            field=models.ImageField(default=None, upload_to="senior_images/senior/"),
        ),
        migrations.AlterField(
            model_name="senior",
            name="house_image",
            field=models.ImageField(default=None, upload_to="senior_images/house/"),
        ),
        migrations.AlterField(
            model_name="senior",
            name="intro_image",
            field=models.ImageField(default=None, upload_to="senior_images/intro/"),
        ),
    ]
