from django.db import models

class Job(models.Model):
  # Images
  image = models.ImageField(upload_to='images/')
  # summary
  summary = models.CharField(max_length=200)

