from rest_framework import serializers
from .models import Duvida, Resposta
from .serializers import RespostaSerializer, DuvidaSerializer




# Create your views here.


class DuvidaViewSet(viewsets.ModelViewSet):
    queryset = Duvida.objects.all()
    serializer_class = DuvidaSerializer

class RespostaViewSet(viewsets.ModelViewSet):
    queryset = Resposta.objects.all()
    serializer_class = RespostaSerializer
    
