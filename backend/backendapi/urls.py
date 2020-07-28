from django.conf.urls import url
from backendapi import views

urlpatterns = [
    url(r'^api/welcome$', views.welcome),
    url(r'^api/book_list$', views.book_list),
    url(r'^api/author_list$', views.author_list),
]
