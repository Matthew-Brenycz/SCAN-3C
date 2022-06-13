from menus.base import NavigationNode #Menu has been removed
from menus.menu_pool import menu_pool
from django.utils.translation import ugettext_lazy as _
from cms.menu_bases import CMSAttachMenu
from cms.models import Title

class PostMenu(CMSAttachMenu):

    #Menu Name (shows in dropdown)
    name = _("post menu")

    def get_nodes(self, request):
        nodes = []
        for t in Title.objects.all():
            if t.page.in_navigation==False and t.page.publisher_is_draft==False:
                n = NavigationNode(_(t.title), "/" + t.path + "/", 1)
                nodes.append(n)

        return nodes

menu_pool.register_menu(PostMenu)