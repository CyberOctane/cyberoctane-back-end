# Generated by Django 2.2.3 on 2019-08-23 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='member',
            fields=[
                ('member_id', models.AutoField(primary_key=True, serialize=False)),
                ('member_first_name', models.CharField(max_length=100)),
                ('member_last_name', models.CharField(max_length=100)),
                ('member_designation_1', models.CharField(max_length=100)),
                ('member_designation_2', models.CharField(max_length=100)),
                ('member_designation_3', models.CharField(max_length=100)),
            ],
        ),
    ]
