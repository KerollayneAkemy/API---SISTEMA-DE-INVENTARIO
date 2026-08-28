📦 API - Sistema de Inventário

API REST para gerenciamento de inventário de produtos e categorias, desenvolvida com Node.js, Express e PostgreSQL, utilizando o Supabase como banco de dados.

O projeto utiliza arquitetura em camadas e possui relacionamento entre as tabelas de produtos e categorias.

👩‍💻 Discentes
Ana Luiza Marcelino De Carli
Emily Pereira Gonçalves
Kerollayne Akemy Gonçalves Pereira
🚀 Tecnologias utilizadas
Node.js
Express
PostgreSQL
Supabase
dotenv
pg
📁 Estrutura do projeto
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
🏗️ Arquitetura
Routes → Controllers → Models → Banco de Dados
🗄️ Banco de Dados

O sistema possui duas tabelas:

categorias
produtos

Uma categoria pode possuir vários produtos, formando um relacionamento 1:N.

Categoria 1 ─────── N Produtos
🔌 Endpoints
Categorias
Método	Rota	Descrição
GET	/categorias	Listar categorias
GET	/categorias/:id	Buscar categoria por ID
POST	/categorias	Criar categoria
Produtos
Método	Rota	Descrição
GET	/produtos	Listar produtos
GET	/produtos/:id	Buscar produto por ID
POST	/produtos	Criar produto
PUT	/produtos/:id	Atualizar produto
DELETE	/produtos/:id	Excluir produto
✅ Validações

A API possui validações para impedir o cadastro de dados inválidos, como:

Produto sem nome;
Preço menor ou igual a zero;
Quantidade negativa;
Produto sem categoria.

Exemplo de resposta:

{
  "mensagem": "O nome do produto é obrigatório"
}
⚙️ Como executar

Clone o repositório:

git clone https://github.com/KerollayneAkemy/API---SISTEMA-DE-INVENTARIO.git

Instale as dependências:

npm install

Crie um arquivo .env com a conexão do banco:

DATABASE_URL=sua_connection_string
PORT=3000

Execute o projeto:

npm start

Servidor disponível em:

http://localhost:3000
