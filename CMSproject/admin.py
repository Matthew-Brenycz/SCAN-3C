

# Register your models here.
from django.contrib import admin
from cms.extensions import PageExtensionAdmin

from .models import Category, CategoryExtension

class CategoryAdmin(admin.ModelAdmin):
    pass

class CategoryExtensionAdmin(PageExtensionAdmin):
    pass

admin.site.register(Category, CategoryAdmin)
admin.site.register(CategoryExtension, CategoryExtensionAdmin)