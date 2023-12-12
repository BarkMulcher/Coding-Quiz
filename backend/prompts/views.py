from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from .models import Prompt
from .serializers import PromptSerializer

# Create your views here.
class PromptList(generics.ListAPIView):
    #     def get(self, request, format=None):
    queryset = Prompt.objects.all() # selects all prompts
    serializer_class = PromptSerializer # (prompts, many=True)
    # return Response(serializer.data)

class PromptDetail(RetrieveAPIView):
    # def get(self, request, pk):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer #(prompt)
    lookup_field = 'pk'
    # return Response(serializer.data)
