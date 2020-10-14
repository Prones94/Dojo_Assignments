from django.urls import path

from . import views

urlpatterns = [
    path('shows', views.index),
    path('shows/new', views.new_show),
    path('shows/create/', views.create_show),
    path('shows/<int:show_id>', views.show),
    path('shows/<int:show_id>/edit', views.edit_show),
    path('shows/<int:show_id>/edit', views.update_show),
    path('shows/<int:show_id>/destroy', views.destroy_show),
]