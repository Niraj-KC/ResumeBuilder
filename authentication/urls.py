from django.urls import path

from authentication.views import RegisterUser, LoginUser, get_csrf_token

urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register'),
    path('login/', LoginUser.as_view(), name='login'),
    path('get-csrf-token/', get_csrf_token, name='get_csrf_token'),
]