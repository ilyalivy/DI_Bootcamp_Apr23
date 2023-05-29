from django.shortcuts import render
from data import people
# Create your views here.

people = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]

def show_list(request):
    sorted_people = sorted(people, key=lambda x: x['age'])
    context = {
        'sorted_people' : sorted_people
    }
    return render(request, 'people.html', context)


def show_person(request, id):
    for i in people:
        if i['id'] == int(id):
            context = i
    return render(request, 'person.html', context)

def show_person(request, id: int):
    person = None
    for p in people:
        if p['id'] == id:
            person = p
            break
    context = {'person_instance': person}
    return render(request, 'person.html', context)