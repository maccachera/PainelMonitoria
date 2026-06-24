from rest_framework import filters
from rest_framework import serializers
from .models import Duvida, Resposta
from .serializers import RespostaSerializer, DuvidaSerializer
from rest_framework import viewsets




# Create your views here.


class DuvidaViewSet(viewsets.ModelViewSet):
    queryset = Duvida.objects.all()
    serializer_class = DuvidaSerializer

class RespostaViewSet(viewsets.ModelViewSet):
    queryset = Resposta.objects.all()
    serializer_class = RespostaSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['duvida__id']

