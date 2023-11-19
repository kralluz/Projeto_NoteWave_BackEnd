
# Notion Clone - Backend

Este é o backend do projeto "Notion Clone", uma aplicação web que replica as principais funcionalidades do Notion, uma plataforma de produtividade popular. O backend é desenvolvido em Node.js com TypeScript e utiliza o banco de dados SQLite com TypeORM.

## Tecnologias Utilizadas

[Veja o diagrama da Tabela aqui.](https://dbdiagram.io/d/6524338effbf5169f0568391)

### Backend

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Para tipagem estática e melhor autocompletar.
- **Express**: Framework para construção de APIs RESTful.
- **Postgress**: Banco de dados relacional: Conformidade ACID, Suporte a SQL Avançado e Extensibilidade.
- **TypeORM**: Biblioteca ORM para manipulação de banco de dados.

## Estrutura da API

A API deste projeto segue os princípios RESTful, utilizando o framework Express para criar um servidor web e definir rotas para diferentes recursos. O gerenciamento de rotas é feito de maneira modular, com cada recurso (como notas, páginas, sessões e usuários) tendo suas próprias rotas e controladores. 

- **Rotas**: Definidas para recursos específicos (ex: `/notes`, `/pages`), utilizando métodos HTTP padrão (GET, POST, PUT, DELETE).
- **Controladores**: Lógica de negócios é gerenciada por controladores dedicados, garantindo uma separação clara entre a interface da API e a lógica de negócios.
- **Middleware**: Uso de middlewares para gerenciamento de autenticação, tratamento de erros e outras funcionalidades transversais.
- **Documentação da API**: A API é documentada usando Swagger, facilitando a compreensão e teste das rotas disponíveis.

## Funcionalidades Planejadas

1. **Gerenciamento de Notas**: Criar, editar e excluir notas.
2. **Organização de Páginas**: Criar páginas e organizar notas nelas.
3. **Auto Save**: Função de autosave.
4. **Pesquisa Avançada**: Busca rápida e avançada nas notas.
5. **Personalização**: Customização de temas, ícones e layouts.

## Como Executar

Instruções sobre como instalar dependências, configurar o ambiente e executar a API localmente.

### Pré-requisitos

- Node.js
- npm ou yarn

### Instalação

1. Clone o repositório.
2. Instale as dependências usando `npm install` ou `yarn`.
3. Configure as variáveis de ambiente conforme necessário.
4. Execute o projeto com `npm start` ou `yarn start`.

## Contribuições

Instruções para contribuidores que desejam colaborar com o projeto, incluindo convenções de código, testes e processos de revisão.

## Licença

Informações sobre a licença do projeto.

