from django.shortcuts import render, HttpResponse
from time import localtime, strftime

def display(request):
    context = {
        "time": strftime("%H:%M:%S %p", localtime()),
        "date": strftime("%Y-%m-%d"),
    }
    return render(request, "index.html",context)
