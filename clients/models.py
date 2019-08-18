from django.db import models

class client(models.Model):
    client_id : models.IntegerField()
    client_logo : models.ImageField(upload_to='images/%Y/%m/%d/')
    def __str__(self):
        return self.client_logo
