# Projeto 01 - Dio Bank

> Inicialização do projeto `npx create-react-app . --template typescript`

> Instalação `npm install react-router-dom` e `@types/react-router-dom` para utilizar BrowserRouter, Route e Routes nas rotas do projeto.

# Projeto 02 - Node Bank

### Dependências para Test

> npm i `jest` `ts-jest` `@types/jest`

> npx jest --init

### Configuração jest.config 
<pre>
{
  preset: "ts-jest"
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
}
</pre>

### Configuração TypeOrm

> npm i `typeorm` `reflect-metadata`
> npm run orm migration:create -n Test

tsconfig ~> 
"experimentalDecorators": true, // Ativa o uso de decoradores, um recurso experimental do TypeScript.
"emitDecoratorMetadata": true, // Emite metadados de tipo necessários para trabalhar com decoradores, como no NestJS.
"allowJs": true // Permite a inclusão de arquivos JavaScript (com extensão .js) no processo de compilação.
