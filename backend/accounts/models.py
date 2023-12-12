from django.db import models

# Django's built-in User model will be used, requiring nothing here
# built-in fields are:
# username, required, <150char
# password, required
# optional first_name
# optional last_name
# optional email
# https://docs.djangoproject.com/en/4.2/ref/contrib/auth/

# if User Profile desired:

# from django.contrib.auth.models import User
# from django.db.models.signals import post_save
# from django.dispatch import receiver

# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     bio = models.TextField(max_length=500, blank=True)
#     location = models.CharField(max_length=30, blank=True)
#     birth_date = models.DateField(null=True, blank=True)
#     # Other fields you might want to include

#     def __str__(self):
#         return self.user.username

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         UserProfile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.userprofile.save()
