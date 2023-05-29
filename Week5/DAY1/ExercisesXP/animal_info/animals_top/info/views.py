from django.shortcuts import render
import requests
import json

# Create your views here.
def family(request):
    file_path = '/Users/ilyalivy/Documents/GitHub/DI_Bootcamp_Apr23/Week5/DAY1/ExercisesXP/animal_info/animals_top/info/animals.json'
    with open(file_path, 'r') as file:
        data = json.load(file)

    context = {'data': data['family']}
    return render(request, 'family.html', context)

def animal(request, id: int):
    file_path = '/Users/ilyalivy/Documents/GitHub/DI_Bootcamp_Apr23/Week5/DAY1/ExercisesXP/animal_info/animals_top/info/animals.json'
    with open(file_path, 'r') as file:
        data = json.load(file)

    for animal in data['animals']:
        if animal['id'] == id:
            context = { 'Name': animal['name'],
                        'Legs': animal['legs'],
                        'Weight': animal['weight'],
                        'Height': animal['height'],
                        'Speed': animal['speed']}
    return render(request, 'animal.html', context)