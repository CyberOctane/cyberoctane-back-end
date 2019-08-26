from django.db import models

class member(models.Model):
    member_id = models.AutoField(primary_key=True)
    member_first_name = models.CharField(max_length=100)
    member_last_name = models.CharField(max_length=100)
    member_designation_1 = models.CharField(max_length=100)
    member_designation_2 = models.CharField(max_length=100)
    member_designation_3 = models.CharField(max_length=100)
    member_photo = models.ImageField(upload_to='images/%Y/%m/%d/')
    def __str__(self):
        return self.member_photo
