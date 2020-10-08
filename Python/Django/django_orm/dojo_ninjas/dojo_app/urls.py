from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('add-dojo', views.add_dojo),
    path('add-ninja', views.add_ninja),
    path('delete',views.delete),
]