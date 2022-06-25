# 🚀 Event Platform 🚀

> Projeto criado durante o evento Ignite Lab da RocketSeat

> Em construção

## 👨‍💻 Tecnologias e bibliotecas utilizadas 👩‍💻

- Javascript / Typescript : Linguagem programação
- Vite : Ferramenta de criação de Front-end
- React : Biblioteca criação de interfaces
- Tailwind CSS : Framework CSS
- GraphQL : Tipo da API utilizada
- Apollo Client : Biblioteca para consumo de API GraphQL
- GraphQL Code Generator : Gerador de código para usar o GraphQL com Apollo

### 📚 bibliotecas adicionais 🗃️

- @apollo/client
- graphql
- phosphor-react
- date-fns
- @vime/core
- @vime/react
- react-router-dom
- classnames

## 📃 Guia 📖

- Criando o projeto com Vite:

        npm create vite@latest
        Ok to proceed? y
        Select a framework: react
        Select a variant: react-ts

        npm install

- Configurando o tailwind CSS (tailwindcss postcss autoprefixer)

        npm install -D tailwindcss postcss autoprefixer

        npx tailwindcss init -p

        editar o arquivo: tailwind.config.js
        substituindo content por: content: ["./src/**/*.tsx"],

        criar arquivo src/styles/global.css
        adicionar nele:
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

        importar o arquivo global.css no main.tsx

- Instalando o GraphQL Code Generator:

        npm i -D @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @graphql-codegen/cli

        criar o arquivo de configuração codegen.yaml

- Criar um arquivo .graphql para cada query e mutation

- Gerando o código de graphql com o CodeGen:

        criar o script no package.json: "codegen": "graphql-codegen"

        npm run codegen

- Usando o código gerado com o CodeGen:

        substituir os useQuery e useMutation pelos hook equivalentes criados
        *obs: o codegen gera hooks para cada query e mutation

## ➕ O que fazer além: ✨

- Somente pessoas inscritas ter acesso ao conteúdo.

- Versão responsiva

## 🖼️ Imagens do projeto 👀

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/event-platform-01.png" alt="Event Platform Img1" width="450"/>

## 🔗 Links úteis ✨

- [GraphCMS](https://graphcms.com/)

- [GraphQL Code Generator](https://www.graphql-code-generator.com/)

## 🚀 Deploy 🔥

- Vercel: https://rocketseat-event-platform-rodolfohok.vercel.app/

## 🔥 Repositório do projeto (this) 🔥

- https://github.com/rodolfoHOk/rocketseat.event-platform
