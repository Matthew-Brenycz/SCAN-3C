from django.views.generic import CreateView
from django.urls import reverse_lazy
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

# from .models import Contact
from .forms import ContactForm

def contact_form(request):

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():

            return HttpResponseRedirect('/thanks/')

    else:
        form = ContactForm()
    return render(request, 'forms/contact_form.html', {'form': form})

