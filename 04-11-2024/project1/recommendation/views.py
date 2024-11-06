from django.shortcuts import render
from .models import person

# Create your views here.

def register(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        password = request.POST['password']

        person.objects.create(name=name, email=email, password=password)
    
    else:
        pass
    
    data = {'data': 'Hello World', 'name': 'John Doe'}
    return render(request,'register.html',data)


