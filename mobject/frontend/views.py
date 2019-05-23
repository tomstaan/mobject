from django.shortcuts import render

def input(request):
    return render(request, 'frontend/index.html')