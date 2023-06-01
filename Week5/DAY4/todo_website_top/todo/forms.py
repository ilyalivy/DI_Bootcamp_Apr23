from django import forms
from .models import Todo



class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = '__all__'
        exclude = ('date_creation', 'date_completion')
        widgets = {
            'details' : forms.Textarea(attrs={'rows' : 3, 'class' : 'content_class'}),
            'deadline_date': forms.DateInput(attrs={'type': 'date'})
        }
