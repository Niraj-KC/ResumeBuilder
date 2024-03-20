from django.urls import path
from .views import create_resume, get_resume, update_resume

urlpatterns = [
    path('add', create_resume, name='create_resume'),
    path('update', create_resume, name='update_resume'),
    path('<int:user_id>/', get_resume, name='get_resume'),
]
