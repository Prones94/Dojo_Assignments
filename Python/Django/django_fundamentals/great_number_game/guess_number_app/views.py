from django.shortcuts import render, HttpResponse, redirect
import random

def index(request):
    if 'tries' not in request.session:
        request.session['tries'] = 0
    if 'random_num' not in request.session:
        request.session['random_num'] = random.randint(0,100)
    return render(request, "index.html")

def guess(request):
    print(request.session['random_num'], request.POST)
    request.session['num'] = int(request.POST['number'])
    if request.session['num'] > request.session['random_num']:
        request.session['result'] = 'Too Big'
        request.session['tries'] += 1
        return redirect("/")
    elif request.session['num'] < request.session['random_num']:
        request.session['result'] = 'Too Small'
        request.session['tries'] += 1
        return redirect("/")
    else:
        request.session['result'] = "Bingo"
        print("***********MATCHED**************")
        request.session['tries'] += 1
        return redirect("/")

def reset(request):
    del request.session['num']
    del request.session['result']
    request.session['tries'] = 0
    return redirect("/")
    
