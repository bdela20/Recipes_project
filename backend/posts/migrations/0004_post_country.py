# Generated by Django 5.1 on 2024-08-25 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_remove_post_country_post_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='country',
            field=models.CharField(default='unknown', max_length=100),
            preserve_default=False,
        ),
    ]
