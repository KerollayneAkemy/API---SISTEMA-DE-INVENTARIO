# 📦 API - Sistema de Inventário

> API REST para gerenciamento de produtos e categorias.

Desenvolvida com **Node.js**, **Express** e **PostgreSQL**, utilizando o **Supabase** como banco de dados e seguindo o padrão de **Arquitetura em Camadas**.

---

## 👩‍💻 Discentes

- **Ana Luiza Marcelino De Carli**
- **Emily Pereira Gonçalves**
- **Kerollayne Akemy Gonçalves Pereira**

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- Supabase

---

## 🏗️ Arquitetura em Camadas

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
Banco de Dados
````

### Estrutura do projeto

```text
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
```

---

## 🗄️ Banco de Dados

O sistema possui duas entidades principais:

```text
Categorias
    │
    │ 1 : N
    ▼
Produtos
```

Cada produto pertence a uma categoria através do campo `categoria_id`.

---

## 🔌 Endpoints

### Categorias

| Método | Endpoint          | Descrição               |
| ------ | ----------------- | ----------------------- |
| `GET`  | `/categorias`     | Listar categorias       |
| `GET`  | `/categorias/:id` | Buscar categoria por ID |
| `POST` | `/categorias`     | Criar categoria         |

### Produtos

| Método   | Endpoint        | Descrição             |
| -------- | --------------- | --------------------- |
| `GET`    | `/produtos`     | Listar produtos       |
| `GET`    | `/produtos/:id` | Buscar produto por ID |
| `POST`   | `/produtos`     | Criar produto         |
| `PUT`    | `/produtos/:id` | Atualizar produto     |
| `DELETE` | `/produtos/:id` | Excluir produto       |

---

## ✅ Validações

A API realiza validações para evitar dados inválidos:

* Produto sem nome;
* Preço menor ou igual a zero;
* Quantidade negativa;
* Produto sem categoria.

Exemplo de resposta:

```json
{
  "mensagem": "O nome do produto é obrigatório"
}
```

---

## ⚙️ Como executar

Clone o repositório:

```bash
git clone https://github.com/KerollayneAkemy/API---SISTEMA-DE-INVENTARIO.git
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env`:

```env
DATABASE_URL=sua_connection_string
PORT=3000
```

Execute o projeto:

```bash
npm start
```

Servidor disponível em:

```text
http://localhost:3000
```

---

<div align="center">

**Projeto Prático — API REST — Arquitetura em Camadas**

</div>

