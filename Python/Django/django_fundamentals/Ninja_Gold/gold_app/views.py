from django.shortcuts import render, redirect
from datetime import datetime
import random 

def index(request):
    print('******************************************')
    if 'money' not in request.session:
        request.session['money'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = []
    # context = {
    #     'activities' : request.session['activities'],
    # }
    return render(request, "index.html")


def process(request):
    print('------------------------------------------')
    if request.POST['options'] == 'farm':
        money = random.randint(10,20)
        request.session['money'] += money
        string = "Earned money farming!" + "(" + str(datetime.now()) + ")\n"
        print('Milk money')
    elif request.POST['options'] == 'cave':
        money = random.randint(5,10)
        request.session['money'] += money
        string= "Earned " + str(money) + " gold mining! " + "(" + str(datetime.now()) + ")\n"
        print('Cavemen money')
    elif request.POST['options'] == 'house':
        money = random.randint(2,5)
        request.session['money'] += money
        string = "Earned " + str(money) + " gold wfh! " + "(" + str(datetime.now()) + ")\n"
        print('WFH')
    elif request.POST['options'] == 'casino':
        money = random.randint(-50, 50)
        request.session['money'] += money
        if money > 0:
            string = "Earned " + str(money) + " gold gambling! " + "(" + str(datetime.now()) + ")\n"
        else:
            
            string = "Lost " + str(money) + " gold gambling! " + "(" + str(datetime.now()) + ")\n"
        print('Las Vegas')
    request.session['activities'].append(string)
    request.session.save()
    return redirect("/")

def reset(request):
    request.session.flush()
    return redirect("/")