# Generated by Django 4.2.14 on 2024-08-21 22:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("review", "0003_alter_review_review_image"),
    ]

    operations = [
        migrations.RenameField(
            model_name="review", old_name="userId", new_name="usersId",
        ),
    ]
