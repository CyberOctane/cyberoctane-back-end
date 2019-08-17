from django.db import models

class member(models.Model)
    member_id : custom
    member_first_name : models.CharField(max_length=100)
    member_last_name : models.CharField(max_length=100)
    member_designation_1 : models.CharField(max_length=100)
    member_designation_2 : models.CharField(max_length=100)
    member_designation_3 : models.CharField(max_length=100)
    member_photo : image
    def __str_self:
        return self.member_photo
