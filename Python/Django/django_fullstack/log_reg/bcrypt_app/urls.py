from django.urls import path

from . import views

urlpatterns = [
    # displays html
    path('', views.index),
    path('dashboard', views.view_dashboard),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
]