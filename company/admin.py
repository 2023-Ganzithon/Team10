from django.contrib import admin

# Register your models here.
from company.models import Company, Comment

admin.site.register(Company)
admin.site.register(Comment)