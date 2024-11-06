from django.contrib import admin
from django.urls import path, include

import projectApp3.views

urlpatterns = [
    path('view/', include(projectApp3.views.home)),
]
