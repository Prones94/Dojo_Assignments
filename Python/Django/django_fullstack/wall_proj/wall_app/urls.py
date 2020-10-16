from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('wall', views.view_wall),
    path('register', views.register_user),
    path('login', views.login_user),
    path('logout', views.logout),
    path('message', views.create_message),
    path('comment', views.create_comment),
    path('comment/<int:comment_id>/delete',views.delete),
]