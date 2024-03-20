from django.db import models
from authentication.models import CustomUser

class Resume(models.Model):
    user_id = models.CharField(max_length=20)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_no = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    social_links = models.TextField(default='[]')  # Store social links as a JSON array
    soft_skill = models.TextField(default='[]')  # Store social links as a JSON array
    technical_skill = models.TextField(default='[]')  # Store social links as a JSON array

class Education(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='education')
    title = models.CharField(max_length=100)
    year = models.IntegerField()

class Job(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='job')
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    is_current = models.BooleanField()

class Achievement(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='achievements')
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()

class Project(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField()
