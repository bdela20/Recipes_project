from django.db import models

class Post(models.Model):
    recipe = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"Post: {self.recipe} - ${self.price}"
