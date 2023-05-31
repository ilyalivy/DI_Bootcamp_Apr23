from django.shortcuts import render
from .forms import CategoryForm, GifForm
from .models import Gif, Category

# Create your views here.

def add_category_view(request):
    if request.method == 'POST':
                data = request.POST
                filled_form = CategoryForm(data)
                filled_form.save()

    category_form = CategoryForm()
    context = {'form': category_form}
    return render(request, 'add_category.html', context)


def add_gif_view(request):
    if request.method == 'POST':
                data = request.POST
                filled_form = GifForm(data)
                filled_form.save()

    category_form = GifForm()
    context = {'form': category_form}
    return render(request, 'add_gif.html', context)

def homepage(request):

    context = {
        'title' : 'Homepage Gifs',
        'gifs' : Gif.objects.all(),
    }

    return render(request, 'home.html', context)

def category(request, cat_id):

    context = {
        'title' : 'Category Gifs',
        'category' : Category.objects.get(id = cat_id)
    }

    return render(request, 'category.html', context)

def categories(request):

    context = {
        'title' : 'List of categories',
        'categories' : Category.objects.all()
    }

    return render(request, 'categories.html', context)

def gif_view(request, gif_id):

    context = {
        'title' : 'Info about gif by id',
        'gif_id' : Gif.objects.get(id = gif_id),
    }

    return render(request, 'gif_view.html', context)