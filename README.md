# Painel de Monitoria Ibmec

Plataforma Full Stack desenvolvida para auxiliar a gestão de dúvidas acadêmicas na disciplina de Web Development. O sistema permite que alunos publiquem dúvidas e monitores respondam de forma organizada.

## 🚀 Tecnologias Utilizadas

### Backend
- **Django**: Framework web principal.
- **Django REST Framework**: API para comunicação com o frontend.
- **SQLite**: Banco de dados (para desenvolvimento).

### Frontend
- **React.js**: Biblioteca para construção da interface.
- **Vite**: Ferramenta de build rápida.
- **Axios**: Cliente HTTP para consumo da API.
- **Tailwind CSS**: Estilização (opcional/integrado).

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:
- Python 3.x
- Node.js e npm

## ⚙️ Como rodar o projeto

### 1. Configurando o Backend (Django)
```bash
# Na pasta raiz
python -m venv venv
# Ative o ambiente (Windows)
.\venv\Scripts\Activate.ps1
# Instale as dependências
pip install -r requirements.txt
# Rode as migrações
python manage.py makemigrations
python manage.py migrate
# Inicie o servidor
python manage.py runserver
