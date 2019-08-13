from django.db import models

class client(models.Model):
    logo = models.ImageField(upload_to='images')
    def __str__(self):
        return self.logo
