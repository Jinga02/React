from django.db import models
from django.contrib.auth.models import AbstractUser
from PIL import Image


# Create your models here.
class User(AbstractUser):
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    followings = models.ManyToManyField('self', related_name='followers', symmetrical=False)
    introduce = models.CharField(max_length=120, blank=True)

    def like_movie(self, movie):
        movie.like_users.add(self)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        if self.profile_picture:
            img = Image.open(self.profile_picture.path)

            if img.height > 300 or img.width > 300:
                output_size = (300, 300)
                img.thumbnail(output_size)
                img.save(self.profile_picture.path)