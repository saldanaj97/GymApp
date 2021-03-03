from rest_framework import serializers
from .models import Workout

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Workout
        fields = ('exercise', 'reps', 'sets', 'weight','workout_type' ,'workout_date')