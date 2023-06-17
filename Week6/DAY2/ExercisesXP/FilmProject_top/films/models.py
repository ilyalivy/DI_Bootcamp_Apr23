from django.db import models
from accounts.models import CustomUser


# Create your models here.

class Country(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Film(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField(auto_now_add=True)
    created_in_country = models.ManyToManyField('Country', related_name='film_country')
    available_in_countries = models.ManyToManyField('Country', related_name='film_available')
    category = models.ManyToManyField('Category', related_name='film_category')
    director = models.ManyToManyField('Director', related_name='film_director')
    producer = models.ManyToManyField('Producer')

    def __str__(self):
        return self.title

class Director(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class RatingChoices(models.IntegerChoices):
    ONE = 1, 'One'
    TWO = 2, 'Two'
    THREE = 3, 'Three'
    FOUR = 4, 'Four'
    FIVE = 5, 'Five'
    
class Review(models.Model):
    film = models.ForeignKey('Film', on_delete=models.CASCADE, related_name='review')
    review_text = models.TextField()
    rating = models.IntegerField(choices=RatingChoices.choices)
    review_date = models.DateTimeField(auto_now_add=True)
    review_author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class Producer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"