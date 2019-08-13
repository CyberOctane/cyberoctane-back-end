from django.db import models
from clients.models import client

class project(models.Model):
    client_name = models.ForeignKey(client, on_delete=models.DO_NOTHING)
    pro = models.CharField(max_length=100)
    pro_role = models.CharField(max_length=100)
    pro_photo = models.ImageField(upload_to='images/%Y%m/%d/')
    is_published = models.BooleanField(default=True)
    def __str__(self):
        return self.pro
