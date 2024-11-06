from django.contrib import admin
from django.urls import path, include

import projectApp1.views

urlpatterns = [
    path('view/', projectApp1.views.register),
]