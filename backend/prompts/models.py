from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers


# Create your models here.

# Prompt Model
class Prompt(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    difficulty = models.CharField(max_length=50)
    editor_text = models.TextField(null=True)
    # maybe:
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# Solution Model
class Solution(models.Model):
    prompt = models.ForeignKey(Prompt, related_name='solutions', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    code = models.TextField()
    language = models.CharField(max_length=100)  # Programming language of the solution
    # maybe:
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username}'s solution to {self.prompt.title}"

# User Model
class Account(models.Model):
    username = models.CharField(max_length=20)

