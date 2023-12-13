from rest_framework import serializers
from .models import Prompt, Solution

class SolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solution
        fields = ['id', 'code', 'language', 'creator']  # Example fields

class PromptSerializer(serializers.ModelSerializer):
    solutions = SolutionSerializer(many=True, read_only=True)

    class Meta:
        model = Prompt
        fields = ['id', 'title', 'description', 'editor_text', 'difficulty', 'solutions']