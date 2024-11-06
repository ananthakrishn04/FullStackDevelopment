from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def login():
    return HttpResponse('Login Page')
    # return render(request, 'login/login.html')
