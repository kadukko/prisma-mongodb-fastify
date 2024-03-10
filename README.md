# Instalação

Um modelo simples de aplicação para reutilização.

Caracteristicas:
- Fastify (Web Framework)
- Prisma (ORM)
- MongoDB (Database)
- Autenticação com JWT e Cookies

## 1. Pré-requisitos

- Node.js
- Git
- MongoDB

## 2. Clone o repositório

```
git clone https://github.com/kadukko/prisma-mongodb-fastify.git
cd prisma-mongodb-fastify
```

## 3. Instale as bibliotecas

```
npm install
```

## 4. Configure as variáveis de ambiente

Renome o arquivo `.env.example` para `.env` e altere os valores das variáveis

## 5. Gere o banco de dados

```
prisma generate
```

## 6. Inicie a aplicação

```
npm run dev
```

## 7. Documentação da aplicação

Importe o arquivo `swagger.yaml` no editor [https://editor.swagger.io/](https://editor.swagger.io/) para visualizar a documentação.

## 8. Licença

Copyright (c) 2024 @ricardosouza.exe

Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o “Software”), para lidar com o Software sem restrição, incluindo, sem limitação, os direitos de usar, copiar, modificar, fundir, publicar, distribuir, sublicenciar e/ou vender cópias do Software, e permitir que as pessoas a quem o Software é fornecido o façam, sujeito às seguintes condições:

O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO “COMO ESTÁ”, SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO E NÃO VIOLAÇÃO. EM NENHUM CASO OS AUTORES OU DETENTORES DOS DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, DELITO OU OUTRA FORMA, DECORRENTE DE, FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO SOFTWARE.

