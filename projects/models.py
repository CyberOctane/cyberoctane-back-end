from django.db import models

class project(models.Model):
    project_id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=200) 
    project_client = models.CharField(max_length=200)
    project_role_1 = models.CharField(max_length=200)
    project_role_2 = models.CharField(max_length=200)
    project_role_3 = models.CharField(max_length=200)
    project_role_4 = models.CharField(max_length=200)
    project_link_1 = models.URLField()
    project_link_2 = models.URLField()
    project_link_3 = models.URLField()
    project_link_4 = models.URLField()
    project_cover_photo = models.ImageField(upload_to='images/%Y/%m/%d/')
    feature_pc_img = models.ImageField(upload_to='images/%Y/%m/%d/')
    feature_mobile_img = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_all = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_1 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_2 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_3 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_4 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_5 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_6 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_7 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_8 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_9 = models.ImageField(upload_to='images/%Y/%m/%d/')
    project_img_10 = models.ImageField(upload_to='images/%Y/%m/%d/')
    is_published = models.BooleanField()
    is_featured = models.BooleanField()
    def __str__(self):
        return self.project_cover_photo
    
