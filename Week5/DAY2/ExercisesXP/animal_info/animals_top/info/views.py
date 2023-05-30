from django.shortcuts import render
from .models import Animal, Family

# Create your views here.

# list of all animals in family

def family(request, family_id):

    context = {
        'family': Family.objects.get(id = family_id),
        'animals': Animal.objects.filter(family = family_id)
        }

    return render(request, 'family.html', context)


# all the information about the given animal

def animal(request, animal_id):

    context = {'animal': Animal.objects.get(id = animal_id)}

    return render(request, 'animal.html', context)



# list of all animals

def animals(request):

    context = {'animals': Animal.objects.all()}

    return render(request, 'animals.html', context)

