from django.shortcuts import render, HttpResponse

def home(request):
    return HttpResponse("Message Board is working ")

def cart(request):
    return HttpResponse('This is the cart from Message Board App')