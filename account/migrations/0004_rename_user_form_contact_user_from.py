# Generated by Django 4.2 on 2023-05-18 05:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_contact'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='user_form',
            new_name='user_from',
        ),
    ]
