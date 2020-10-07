from django.shortcuts import render

from .models import Dojo, Ninja

def index(request):
    return render(request,"index.html")
