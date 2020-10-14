from django.shortcuts import render, redirect
from django.contrib import messages

from .models import Shows

def index(request):
    return redirect('/shows')

def new_show(request):
    return render(request, "add_show.html")

def create_show(request):
    errors = Shows.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for _ ,v in errors.items():
            messages.error(request, v)
        return redirect("shows/new")
    else:
        new_show = Shows.objects.create(
            title = request.POST["title"],
            network = request.POST["network"],
            release_date = request.POST["date"],
            description = request.POST["description"],
        )
        return redirect(f"/shows/{new_show.id}")
 
def show(request, show_id):
    context = {
        "all_shows" : Shows.objects.all()
    }
    return render(request, "index.html", context)

def edit_show(request, show_id):
    show = Shows.objects.get(id=show_id)
    show.release_date = show.release_date.strftime("%Y-%m-%d")
    context = {
        "show" :show,
    }
    return render(request, "edit-show.html", context)

def update_show(request, show_id):
    errors = Shows.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for _, v in errors.items():
            messages.error(request, v)
        return redirect(f"/shows/{show_id}/edit")
    else:
        show = Shows.objects.get(id=show_id)
        show.title = request.POST["title"]
        show.network = request.POST["network"]
        show.release_date = request.POST["date"]
        show.description = request.POST["description"]
        show.save()
        return redirect(f"shows/{show_id}")

def destroy_show(request, show_id):
    show = Shows.objects.get(id=show_id)
    show.delete()

    return redirect("/shows")