from autoslug import AutoSlugField
from django.contrib.auth.models import User
from django.db import models
from django.urls import reverse


class Notes(models.Model):
    title = models.CharField(max_length=255, verbose_name='Тема', blank=True, null=True)
    content = models.TextField(verbose_name='Содержание', blank=True, null=True)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


    def __str__(self):
        return self.title


