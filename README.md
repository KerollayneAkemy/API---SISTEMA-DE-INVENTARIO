📦 API - Sistema de Inventário

API REST para gerenciamento de produtos e categorias.

Desenvolvida com Node.js, Express e PostgreSQL, utilizando o Supabase como banco de dados e seguindo o padrão de Arquitetura em Camadas.

👩‍💻 Discentes
Ana Luiza Marcelino De Carli
Emily Pereira Gonçalves
Kerollayne Akemy Gonçalves Pereira
🚀 Tecnologias
<div align="center">

Node.js • Express • PostgreSQL • Supabase

</div>
🏗️ Arquitetura

O projeto foi organizado seguindo a seguinte estrutura:

Routes
   ↓
Controllers
   ↓
Models
   ↓
Banco de Dados
src/
├── config/
│   └── database.js
├── controllers/
│   ├── categoriaController.js
│   └── produtoController.js
├── models/
│   ├── categoriaModel.js
│   └── produtoModel.js
├── routes/
│   ├── categoriaRoutes.js
│   └── produtoRoutes.js
└── server.js
🗄️ Banco de Dados

O sistema possui duas entidades principais:

📁 Categorias
      │
      │ 1 : N
      ▼
📦 Produtos

Cada produto pertence a uma categoria, utilizando o campo categoria_id.

🔌 Endpoints
Categorias
Método	Endpoint	Descrição
GET	/categorias	Listar categorias
GET	/categorias/:id	Buscar categoria
POST	/categorias	Criar categoria
Produtos
Método	Endpoint	Descrição
GET	/produtos	Listar produtos
GET	/produtos/:id	Buscar produto
POST	/produtos	Criar produto
PUT	/produtos/:id	Atualizar produto
DELETE	/produtos/:id	Excluir produto
✅ Validações

A API realiza validações para evitar dados inválidos, como:

❌ Produto sem nome
❌ Preço menor ou igual a zero
❌ Quantidade negativa
❌ Produto sem categoria

Exemplo:

{
  "mensagem": "O nome do produto é obrigatório"
}
⚙️ Como executar

Clone o repositório:

git clone https://github.com/KerollayneAkemy/API---SISTEMA-DE-INVENTARIO.git

Instale as dependências:

npm install

Configure o arquivo .env:

DATABASE_URL=sua_connection_string
PORT=3000

Execute:

npm start

🚀 Servidor disponível em:

http://localhost:3000
<div align="center">

Projeto Prático • API REST • Arquitetura em Camadas

</div>
