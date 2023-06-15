from django.db import models
from django.conf import settings
from accounts.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver


# Create your models here.
class Profile(models.Model):
    usernumber = models.OneToOneField(User, on_delete=models.CASCADE)

    @receiver(post_save, sender=User)
    def create_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(usernumber=instance)

class Comment(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
   