from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import ugettext_lazy as _

from CMSproject.models import Category, CategoryExtension
from cms.models import Title

class MenuPlugin(CMSPluginBase):
    model = CMSPlugin
    name = _("Menu Plugin")
    render_template = "menu_plugin.html"
    cache = False

    def render(self, context, instance, placeholder):
      articles = []
      for t in Title.objects.all():
        if t.page.publisher_is_draft==False:
          try:
            if str(t.page.categoryextension.category) == 'Article':
              anchor = (t.title,t.path)
              articles.append(anchor)
          except:
            pass

      context['articles'] = articles
      return context
plugin_pool.register_plugin(MenuPlugin)