from django.db import models

# Specifying choices for workout types
WORKOUT_CHOICES = (("Push","Push"), ("Pull", "Pull"), ("Legs", "Legs"))

# Workout model 
class Workout(models.Model):
    exercise = models.CharField(max_length=50)
    sets = models.PositiveIntegerField()
    reps = models.PositiveIntegerField()
    weight = models.PositiveIntegerField()
    workout_type = models.CharField(max_length=20, choices=WORKOUT_CHOICES)
    workout_date = models.DateField(auto_now_add=True)