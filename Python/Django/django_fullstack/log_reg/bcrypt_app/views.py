from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, 'index.html')

def view_dashboard(request):
    if 'uuid' not in request.session:
        messages.error(request, "Mustt validate to view user page")
        return redirect('/')
    context = {
        "user" : User.objects.get(id=request.session['uuid'])
    }
    return render(request, 'dashboard.html', context)

def register(request):
    print(request.POST)
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        print(f'HASHKEY:{hash}')
        new_user = User.objects.create(
            first_name = request.POST["first_name"],
            last_name = request.POST['last_name'],
            email = request.POST['email'],
            # password = request.POST['password"]
            password = hash
        )
        request.session['uuid'] = new_user.id
        return redirect('/dashboard')

def login(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key,value in errors.items():
            messages.error(request, value)
            return redirect('/')
    else:
        user = User.objects.get(email=request.POST['email'])
        request.session['uuid'] = user.id
        return redirect('/dashboard')

def logout(request):
    request.session.flush()
    return redirect('/')