from django.forms import ModelForm
from django.forms import Textarea
# from .models import Contact
from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Div, Submit, Fieldset, ButtonHolder, MultiField


class ContactForm(forms.Form):
    first_name = forms.CharField(
        label="First Name", 
        max_length=100
    )
    surname = forms.CharField(
        label="Surname",
        max_length=100
    )
    email = forms.EmailField(
        label="Email",
        max_length=100
    )
    phone_number = forms.CharField(
        label="Phone Number",
        max_length=15,
        required=False
    )
    message = forms.CharField(
        label="Message",
        widget=forms.Textarea
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        # self.helper.form_method = 'post'
        # self.helper.add_input(Submit('submit', 'Submit'))
        self.helper.layout = Layout(
                Fieldset(
                    'Contact Form',
                    'first_name',
                    'surname',
                    'email',
                    'phone_number',
                    'message',
                ),
                Div(
                    Submit('submit', 'Submit'),
                    css_class="text-center mb-4"
                ),
            )

