from django.db import models
from datetime import date

class client(models.Model):
    client_id = models.AutoField(primary_key=True)
    client_logo = models.ImageField(upload_to='images/%Y/%m/%d/')
    def __str__(self):
        return self.client_logo
