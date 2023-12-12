from django.urls import path
from .views import PromptList, PromptDetail

urlpatterns = [
    path('', PromptList.as_view(), name='prompt-list'),
    path('<int:pk>', PromptDetail.as_view(), name='prompt-detail')
]
