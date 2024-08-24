from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# from django.contrib.auth.models import AbstractUser
# from django.core.validators import RegexValidator
# from django.contrib.auth.models import Group, Permission

# class User(AbstractUser):
#     phoneNumberRegex = RegexValidator(
#         regex=r'^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$',
#         message="전화번호 형식이 올바르지 않습니다."
#     )
#     phone_number = models.CharField(
#         validators=[phoneNumberRegex],
#         max_length=11,
#         unique=True,
#         null=True
#     )
#     birthdate = models.DateField(null=True)

#     def __str__(self):
#         return self.username
    