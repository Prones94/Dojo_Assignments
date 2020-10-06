from django.shortcuts import render, redirect
from datetime import datetime
import random 

def index(request):
    print('******************************************')
    if 'money' not in request.session:
        request.session['money'] = 0
        request.session['activities'] = []
        # request.session['actions'] = ''
    return render(request, "index.html")


def process(request):
    print('------------------------------------------')
    if request.POST['options'] == 'farm':
        # print(request.session['actions'])
        money = random.randint(10,20)
        request.session['money'] += money
        action = "Earned money \n"
        print('Milk money')
    elif request.POST['options'] == 'cave':
        money = random.randint(5,10)
        request.session['money'] += money
        # request.session['actions'] += "Earned " + str(gold) + " gold mining! " + "(" + str(datetime.now()) + ")\n"
        print('Cavemen money')
    elif request.POST['options'] == 'house':
        money = random.randint(2,5)
        request.session['money'] += money
        # request.session['actions'] += "Earned " + str(gold) + " gold wfh! " + "(" + str(datetime.now()) + ")\n"
        print('WFH')
    elif request.POST['options'] == 'casino':
        money = random.randint(-50, 50)
        request.session['money'] += money
        # if money > 0:
            # request.session['actions'] += "Earned " + str(gold) + " gold gambling! " + "(" + str(ddatetime.now()) + ")\n"
        # else:
            # request.session['actions'] += "Lost " + str(gold) + " gold gambling! " + "(" + str(datetime.now()) + ")\n"
        print('Las Vegas')
    request.session['activities'].append("Hello\n")
    request.session.save()
    return redirect("/")