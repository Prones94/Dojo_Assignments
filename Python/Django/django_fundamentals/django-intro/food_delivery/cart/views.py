from django.shortcuts import render, HttpResponse

def home(request):
    return render(request, "index.html")

def shopping(request):
    return HttpResponse("This is the shopping cart from the Cart app ")
