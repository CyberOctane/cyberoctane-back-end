# Generated by Django 2.2.3 on 2019-08-18 05:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='client_name',
        ),
        migrations.RemoveField(
            model_name='project',
            name='is_published',
        ),
        migrations.RemoveField(
            model_name='project',
            name='pro',
        ),
        migrations.RemoveField(
            model_name='project',
            name='pro_photo',
        ),
        migrations.RemoveField(
            model_name='project',
            name='pro_role',
        ),
    ]
