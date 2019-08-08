from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'pages/index.html')

def all_projects(request):
    return render(request, 'pages/all_projects.html')

