# Teste - Brain Agriculture

O teste tem como objetivo acurar as habilidades do candidato em resolver alguns problemas relacionados à lógica de programação, regra de negócio e orientação à objetos.

O mesmo consiste em um cadastro de produtor rural com os seguintes dados:

1.  CPF ou CNPJ
2.  Nome do produtor
3.  Nome da Fazenda
4.  Cidade
5.  Estado
6.  Área total em hectares da fazenda
7.  Área agricultável em hectares
8.  Área de vegetação em hectares
9.  Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)

# Requisitos de negócio

- O usuário deverá ter a possibilidade de cadastrar, editar, e excluir produtores rurais.
- O sistema deverá validar CPF e CNPJ digitados incorretamente.
- A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda
- Cada produtor pode plantar mais de uma cultura em sua Fazenda.
- A plataforma deverá ter um Dashboard que exiba:
  - Total de fazendas em quantidade
  - Total de fazendas em hectares (área total)
  - Gráfico de pizza por estado.
  - Gráfico de pizza por cultura.
  - Gráfico de pizza por uso de solo (Área agricultável e vegetação)

# Requisitos técnicos

- O desenvolvedor front-end deverá utilizar:

  - [ReactJS](http://reactjs.org);
  - [Redux](https://redux.js.org/) para controlar o estado da aplicação.
    - Caso entenda que faça sentido, utilize [Context API](https://reactjs.org/docs/context.html) como recurso adicional ou substituto ao Redux (Opcional)
  - Crie pelo menos um teste unitário por componente (Opcional)
  - A criação das estruturas de dados "mockados" faz parte da avaliação.

- O desenvolvedor back-end deve:
  - Salvar os dados em um banco de dados Postgres usando o NodeJS como layer de Backend, e entregar os endpoints para cadastrar, editar, e excluir produtores rurais, além do endpoint que retorne os totais para o dashboard.
  - A criação das estruturas de dados "mockados" faz parte da avaliação.

  Desejável:
  - TypeScript
  - Conceitos como SOLID, KISS, Clean Code, API Contracts, Tests, Layered Architecture

  Bonus:
  - Aplicação disponibilizada em algum cloud provider de sua preferência

- O desenvolvedor full-stack deve realizar ambos, e concluir a integração.
  > Não envie a solução como anexo, suba os fontes para seu Github (ou outro repositório) e envie o link para o avaliador.

# Features
## Produtores
- [x] Possibilidade de criar um produtor rural.
- [x] Atualizar dados de um produtor rural.
- [x] Buscar produtor por ID.
- [x] Listar todos os produtores.
- [x] Excluir um produtor.
## Fazendas
- [x] Possibilidade de criar uma fazenda vinculada a um produtor.
- [x] Atualizar dados de uma fazenda.
## Dashboard
- [x] Total de fazendas em quantidade.
- [x] Total de fazendas em hectares (área total).
- [x] Gráfico de pizza por estado.
- [x] Gráfico de pizza por cultura.
- [x] Gráfico de pizza por uso de solo (área agricultável e vegetação).

- # Tecnologias 
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Knex.js](https://knexjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Joi](https://joi.dev/)
- [Jest](https://jestjs.io/)

# Começando
## Pré-requisitos
Certifique-se de ter o seguinte instalado na sua máquina:
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## Instalação
1. Clone o repositório:
  ```bash
    https://github.com/7feeh7/brain-agriculture-backend.git
    cd brain-agriculture-backend
  ```
2. Instale as dependências:
Use npm ou yarn, de acordo com sua preferência:
  ```bash
    # Com npm
    npm install
    # Ou com yarn
    yarn install
  ```
3. Configure o arquivo .env:
Crie um arquivo .env na raiz do projeto seguindo o exemplo abaixo:
  ```bash
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=brain_agriculture
    DB_PORT=5432
  ```
# Rodando o Projeto
1. Iniciar o Banco de Dados
Certifique-se de que o PostgreSQL está rodando e o banco de dados foi configurado.

2. Executar as Migrações
Rode as migrações para criar as tabelas no banco:
  ```bash
    # Com npm
    npm run prestart
    # Ou com yarn
    yarn prestart
  ```
3. Iniciar o Servidor
  ```bash
    # Com npm
    npm run start:dev
    # Ou com yarn
    yarn start:dev
  ```
# Rodando os Testes
1. Execute todos os testes:
  ```bash
    # Com npm
    npm run test
    # Ou com yarn
    yarn test
  ```
2. Testes em tempo real (modo watch):
  ```bash
    # Com npm
    npm run test:watch
    # Ou com yarn
    yarn test:watch
  ```
3. Gerar relatório de cobertura:
  ```bash
    # Com npm
    npm run test:coverage
    # Ou com yarn
    yarn test:coverage
  ```
# Documentação
Para mais detalhes sobre as rotas do projeto, [clique aqui.](https://documenter.getpostman.com/view/15611768/2sAYBUEt4g)
