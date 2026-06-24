from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DuvidaViewSet, RespostaViewSet

router = DefaultRouter()
router.register(r'duvidas', DuvidaViewSet)
router.register(r'respostas', RespostaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]