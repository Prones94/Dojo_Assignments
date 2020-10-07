from django.shortcuts import render, redirect
from .models import Cast

# Create your views here.
def index(request):
    context = {
        'members': Cast.objects.all(),
    }
    return render(request, "index.html", context)

def add_cast(request):
    print('-----------------------------')
    print(request.POST)
    print('-----------------------------')
    new_cast = Cast.objects.create(
        first_name = request.POST['fname'],
        last_name = request.POST['lname'],
        email = request.POST['email'],
        age = request.POST['age'],
    )
    print('New Cast Member:')
    print(new_cast)
    return redirect('/')