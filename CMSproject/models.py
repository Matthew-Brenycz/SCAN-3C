from django.db import models
from cms.models.pluginmodel import CMSPlugin
from cms.extensions import PageExtension
from cms.extensions.extension_pool import extension_pool
 
# Create your models here.

class Category(models.Model):
    category = models.CharField(max_length=20)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.category

class CategoryExtension(PageExtension): #TitleExtension
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

extension_pool.register(CategoryExtension)