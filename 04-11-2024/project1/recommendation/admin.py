from django.contrib import admin
from .models import person


@admin.register(person)
class personAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'password']


admin.register(personAdmin )