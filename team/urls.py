from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='team'),
    path('<int:team_id>', views.team, name='team'),
    path('search', views.search, name='search'),
]