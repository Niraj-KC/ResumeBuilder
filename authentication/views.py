from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from .serializers import UserSerializer, LoginSerializer
from django.middleware.csrf import get_token

# @csrf_exempt
class RegisterUser(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        # csrf_token = get_token(request)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful', "data":serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @csrf_exempt
class LoginUser(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)
            if user is not None:
                login(request, user)
                # Serialize the CustomUser object to a dictionary
                user_data = {
                    'id': user.id,
                    'email': user.email,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    # Add any other fields you want to include
                }
                return JsonResponse({'message': 'Login successful', 'user': user_data}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def get_csrf_token(request):
    # Get the CSRF token
    csrf_token = get_token(request)
    # Return the CSRF token in a JSON response
    return JsonResponse({'csrf_token': csrf_token})