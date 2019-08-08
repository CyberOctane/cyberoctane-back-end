from django.shortcuts import render

def index(request);
    return render(request, 'team/team.html')

def search(request);
    return render(request, 'team/search.html')
