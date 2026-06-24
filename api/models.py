from django.db import models
from django.contrib.auth.models import User

class Duvida(models.Model):
    OPCOES_LINGUAGEM = [
        ('HTML', 'HTML'),
        ('CSS', 'CSS'),
        ('JS', 'JavaScript'),
        ('GERAL', 'Dúvida Geral'),
    ]

    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    linguagem = models.CharField(max_length=10, choices=OPCOES_LINGUAGEM, default='GERAL')
    resolvido = models.BooleanField(default=False)
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.titulo} ({self.linguagem})"

class Resposta(models.Model):
    duvida = models.ForeignKey(Duvida, on_delete=models.CASCADE)
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    descricao = models.TextField()
    data_criacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Resposta de {self.autor.username} na dúvida: {self.duvida.titulo}"