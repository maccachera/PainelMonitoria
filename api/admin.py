from django.contrib import admin
from .models import Duvida, Resposta

# Registrando os nossos models para aparecerem no painel admin
admin.site.register(Duvida)
admin.site.register(Resposta)

