from django.urls import path

urlpatterns = [
    path('', views.login),
    path('books', views.homepage),
    path('books/<int:book_id>/', view_book),
    path('logout', views.logout),
]