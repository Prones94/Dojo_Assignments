from django.urls import path

from . import views

urlpatterns = [
    path('messageboard/', views.home),
    path('cart/', views.cart)
]