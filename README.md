# SujeitoPizza API

API REST desenvolvida em **Node.js + TypeScript** para gerenciamento de pedidos de uma pizzaria. O projeto cobre autenticação de usuários, cadastro de produtos e categorias, controle de pedidos e itens do pedido, utilizando **Prisma ORM** com banco de dados relacional.

Este projeto foi desenvolvido com foco em **boas práticas de arquitetura**, **separação de responsabilidades** e **padrão de serviços**, sendo ideal para demonstração em portfólio backend.

---

## 📌 Visão Geral

A SujeitoPizza API permite:

* Autenticação e cadastro de usuários
* Gerenciamento de categorias e produtos
* Criação e controle de pedidos
* Associação de itens a pedidos
* Finalização e envio de pedidos
* Upload de imagens de produtos

Toda a regra de negócio está isolada em **services**, enquanto os **controllers** lidam apenas com requisição e resposta.

---

## 🧱 Arquitetura do Projeto

O projeto segue uma estrutura organizada por domínio:

```
src/
├── controllers/        # Camada HTTP (Express)
├── services/           # Regras de negócio
├── utils/              # Utilitários (Prisma, hash de senha)
├── prisma/             # Schema e client do Prisma
├── tmp/                # Upload temporário de imagens
```

### Padrões aplicados

* **Service Layer Pattern**
* **Controller enxuto**
* **Prisma ORM** para acesso a dados
* **TypeScript** para tipagem e segurança

---

## 🛠 Tecnologias Utilizadas

* Node.js
* TypeScript
* Express
* Prisma ORM
* SQLite (ambiente de desenvolvimento)
* Multer (upload de arquivos)
* bcryptjs (hash de senhas)
* JSON Web Token (JWT)

---

## 🗄 Banco de Dados

O banco é modelado utilizando **Prisma**, com as principais entidades:

* User
* Category
* Product
* Order
* Item

O arquivo `schema.prisma` define os relacionamentos e regras do banco.

---

## 🔐 Autenticação

A autenticação é baseada em **JWT**:

* Login gera um token
* Rotas protegidas validam o token
* Senhas são armazenadas com hash (bcrypt)

---

## 📦 Funcionalidades Principais

### Usuários

* Cadastro de usuário
* Autenticação
* Detalhes do usuário autenticado

### Categorias

* Criação de categorias
* Listagem de categorias

### Produtos

* Cadastro de produtos com imagem
* Listagem de produtos por categoria

### Pedidos

* Criação de pedido
* Adição e remoção de itens
* Envio/finalização de pedido
* Listagem de pedidos abertos

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* Node.js (>= 18)
* npm ou yarn

### Passos

```bash
# Instalar dependências
npm install

# Gerar o client do Prisma
npx prisma generate

# Executar as migrations
npx prisma migrate dev

# Iniciar o servidor
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3333
```

---

## 📂 Upload de Imagens

As imagens dos produtos são armazenadas temporariamente na pasta `tmp/`, utilizando **Multer**.

---

## 🧪 Qualidade do Código

* Tipagem forte com TypeScript
* Separação clara entre camadas
* Código modular e reutilizável
* Fácil manutenção e escalabilidade

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

* Demonstrar domínio de backend com Node.js
* Aplicar padrões reais de mercado
* Servir como base para sistemas comerciais
