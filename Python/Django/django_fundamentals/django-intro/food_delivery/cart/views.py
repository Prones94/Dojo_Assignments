from django.shortcuts import render, HttpResponse

def home(request):
    return HttpResponse('This is the Home from the Cart')

def shopping(request):
    return HttpResponse("This is the shopping cart from the Cart app ")
