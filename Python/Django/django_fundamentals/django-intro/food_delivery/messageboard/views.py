from django.shortcuts import render

def home(request):
    context = {
        'name': 'Ian Rones',
        'color': 'Teal',
        'pets': 'DJ',
        'jobs': ["Bartender", "Server", "Developer", "Designer"]

    }
    return render(request, "index.html", context)

def cart(request):
    return render(request, "cart.html")