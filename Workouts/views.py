from django.shortcuts import render
from rest_framework import generics 
from .models import Workout
from .serializers import WorkoutSerializer

# Create your views here.
class WorkoutListCreate(generics.ListCreateAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
