# Sistema de Gerenciamento de Usuários

Este é um sistema completo de gerenciamento de usuários desenvolvido com Vue.js 3 no frontend e Node.js/Express no backend, utilizando MySQL como banco de dados.

## 🚀 Tecnologias Utilizadas

### Frontend
- Vue.js 3
- Vue Router
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- JWT (Autenticação)
- Bcrypt (Criptografia)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL (versão 8.0 ou superior)
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DO_PROJETO]
```

2. Configure o banco de dados:
- Crie um banco de dados MySQL chamado `meubanco`
- Configure as credenciais no arquivo `.env` do backend

3. Instale as dependências do backend:
```bash
cd backend
npm install
```

4. Instale as dependências do frontend:
```bash
cd ../frontend
npm install
```

## ⚙️ Configuração

### Backend (.env)
Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:
```
DB_NAME=meubanco
DB_USER=root
DB_PASSWORD=sua_senha
DB_HOST=localhost
JWT_SECRET=sua_chave_secreta
PORT=3000
```

## 🚀 Executando o Projeto

1. Inicie o backend:
```bash
cd backend
npm run dev
```

2. Em outro terminal, inicie o frontend:
```bash
cd frontend
npm run serve
```

3. Acesse a aplicação:
- Frontend: http://localhost:8080
- Backend: http://localhost:3000

## 📝 Funcionalidades

- [x] Autenticação de usuários
- [x] Listagem de usuários
- [x] Proteção de rotas
- [x] Interface responsiva
- [x] Tratamento de erros
- [x] Feedback visual para o usuário

## 🔐 Rotas da API

### Usuários
- `POST /usuarios` - Criar novo usuário
- `GET /usuarios` - Listar todos os usuários
- `PUT /usuarios/:id` - Atualizar usuário
- `POST /usuarios/login` - Autenticação

## 🛠️ Estrutura do Projeto

```
projeto/
├── backend/
│   ├── config/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── views/
    │   ├── router/
    │   ├── services/
    │   ├── App.vue
    │   └── main.js
    ├── package.json
    └── vue.config.js
```