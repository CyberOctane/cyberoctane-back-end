from django.db import models

class client(models.Model):
    client_name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='images')
    def __str__(self):
        return self.logo
