from django.shortcuts import render, redirect

def index(request):
    counter = request.session.get('counter', 0)
    request.session['counter'] = counter + 1
    context = {
        'counter': counter,
    }
    return render(request, "index.html", context)

def add_two(request):
    counter = request.session['counter']
    request.session['counter'] = counter + 1
    context = {
        'counter' : counter,
    }
    return redirect("/", context)

def destroy(request):
    del request.session['counter']
    return redirect("/")
