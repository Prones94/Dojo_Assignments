from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt

from .models import *

def index(request):
    return render(request,"onboard.html")

def view_wall(request):
    if 'uuid' not in request.session:
        messages.error(request, "Must validate to view user page")
        return redirect('/')
    context ={
        'user':User.objects.get(id=request.session['uuid']),
        "messages" : Messages.objects.all(),
    }
    return render(request, 'wall.html', context)

def register_user(request):
    print(request.POST)
    '''
        Steps for registering
        1. Add validation checks
        2. Create User
        3. Set-up session
    '''
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for _, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        hashed = bcrypt.hashpw(
            request.POST['password'].encode(),
            bcrypt.gensalt()
        ).decode
        print(hashed)

        new_user = User.objects.create(
            first_name=request.POST['first_name'],
            last_name=request.POST['last_name'],
            email=request.POST['email'],
            password=hashed
        )
        request.session['uuid'] = new_user.id
    return redirect('/wall')

def login_user(request):
    print(request.POST)
    '''
        Steps for login
        1. Check if email is in database
        2. Check if password matches
        3. If everything checks out
            3a. Set them up in session
    '''
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for _, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        user = User.objects.get(email=request.POST['email'])
        request.session['uuid'] = user.id
        return redirect('/wall')

def logout(request):
    request.session.clear()
    return redirect('/')

# Wall Functions
def create_message(request):
    logged_in_user = User.objects.get(id=request.session['uuid'])
    Messages.objects.create(
        message = request.POST['new_msg'],
        user = logged_in_user
    )
    return redirect('/wall')

def create_comment(request):
    logged_in_user = User.objects.get(id=request.session['uuid'])
    Comments.objects.create(
        comment = request.POST['new_comment'],
        user = logged_in_user,
        message = Messages.objects.get(id=request.POST['msg_id'])
    )
    return redirect('/wall')

def delete(request,comment_id):
    Comments.objects.get(id=comment_id).delete()
    return redirect('/wall')