from django.contrib import admin
from django.urls import path, include

import projectApp2.views

urlpatterns = [
    path('view/', include(projectApp2.views.login)),
]
