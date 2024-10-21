# Banco de dados - DioBank 💸

## 💻 Descrição do projeto

Este projeto é uma aplicação web desenvolvida para gerenciar usuários, permitindo a criação, recuperação e exclusão de registros. O objetivo é fornecer uma interface simples para interagir com um banco de dados SQLite, utilizando TypeORM para gerenciamento de dados.

> **Colaboração:** Not found  
> **Status:** <span> Concluído  ✔️ 

## 📜 Índice

- [Descrição](#-descrição-do-projeto)
- [Conceitos Aprendidos](#-conceitos-aprendidos)
- [Tecnologias Utilizadas](#--tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades)
- [Pendências](#-pendências)
- [Contribuição](#-contribuição)
- [Informações Adicionais](#-informações-adicionais)
- [Licença](#-licença)
- [Conclusão](#-conclusão)

## ✅ Conceitos Aprendidos 

- Uso de Express.js para criação de rotas e gerenciamento de requisições.
- Integração com TypeORM para manipulação de um banco de dados SQLite.
- Implementação de rotas para CRUD (Create, Read, Update, Delete) de usuários.
- Uso de Middlewares para tratamento de erros e validação de dados.
- Estruturação de projeto em módulos para melhor organização do código.

## 🛠 Tecnologias Utilizadas

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## ⚙ Instalação

Para começar a usar este projeto, siga as etapas abaixo:

1. Faça um fork do repositório:
   <pre>git fork https://github.com/IgoRenatoo/TS-DIO-ProjectsCourseTypescript.git</pre>

2. Clone o seu fork para sua máquina:
   <pre>git clone https://github.com/IgoRenatoo/TS-DIO-ProjectsCourseTypescript.git</pre>

3. Acesse o diretório do projeto:
   <pre>cd TS-DIO-ProjectsCourseTypescript</pre>

4. Acesse a pasta do projeto:
   <pre>cd 02-BackEnd</pre>

5. Instale as dependências:
   <pre>npm install</pre>

## 🚀 Uso 

Para usar o projeto, você pode executar os seguintes passos:

1. Execute o comando `npm run dev` no terminal de sua preferência.
2. Utilize um cliente HTTP (como Postman ou Insomnia) para interagir com as rotas disponíveis:

    Para usar o projeto, você pode acessar os seguintes endpoints:
    > `GET /` - Retorna a página inicial do projeto.

    > `GET /users` - Busca todos os usuários cadastrados no banco de dados.

    > `POST /post-user` - Adiciona um usuário com os dados fornecidos.

    > `DELETE /clear` - Deleta todos os usuários do banco de dados.

## 🧩 Funcionalidades

1. **PagInitial()**
   - Exibe a página inicial do projeto.

2. **GetUsers()**
   - Recupera todos os usuários armazenados no banco de dados.

3. **CreateUser()**
   - Cria um novo usuário a partir dos dados recebidos na requisição.

4. **DeleteUsers()**
   - Remove todos os usuários do banco de dados.

## ⏳ Pendências

Atualmente, o código está completo, mas há algumas pendências a serem consideradas para aprimorar o projeto:

1. **Integração com o Front-End**: A implementação da interface de usuário ainda precisa ser concluída. Planejamos usar frameworks como React ou Vue.js para facilitar a comunicação com a API e melhorar a experiência do usuário.

2. **Validação de Dados**: Implementar uma validação mais robusta para as entradas do usuário no front-end, garantindo que os dados sejam formatados corretamente antes de serem enviados para o servidor.

3. **Mecanismos de Autenticação**: Adicionar autenticação de usuário, permitindo que apenas usuários registrados possam acessar certas funcionalidades da aplicação.

4. **Tratamento de Erros**: Melhorar a gestão de erros, tanto no back-end quanto no front-end, para fornecer feedback mais claro e útil ao usuário em caso de falhas.

5. **Responsividade**: Garantir que a interface seja responsiva, adaptando-se bem a diferentes tamanhos de tela e dispositivos.

6. **Documentação do Front-End**: Criar uma documentação clara para as rotas da API e como o front-end deve interagir com elas, facilitando futuras manutenções e contribuições.

7. **Desenvolvimento Orientado a Testes (TDD)**: Implementar uma abordagem de TDD para garantir que o código seja testado antes de ser escrito, aumentando a cobertura de testes e a confiabilidade do software.

8. **Desenvolvimento Orientado a Domínio (DDD)**: Adotar princípios de DDD para melhor organizar o código em torno do domínio do problema, facilitando a manutenção e evolução do sistema ao longo do tempo.

Essas melhorias visam aumentar a funcionalidade e a usabilidade do projeto, preparando-o para uma implementação em produção.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Clone o seu fork para sua máquina ( `git clone https://github.com/seu_usuário/TS-DIO-ProjectsCourseTypescript` ).
3. Crie uma branch para sua feature ou correção de bug ( `git checkout -b sua-feature` ).
4. Commit suas alterações ( `git commit -m 'Mensagem desejada'` ).
5. Push para a branch ( `git push origin sua-feature` ).
6. Abra um Pull Request.
7. Aguarde à análise.

## 💡 Informações adicionais

- A aplicação foi desenvolvida como parte de um projeto acadêmico.
- O banco de dados é criado automaticamente na primeira execução, utilizando o TypeORM.
- Todas as informações são armazenadas localmente em um arquivo SQLite.

## 🔓 Licença

Este projeto está licenciado sob a Licença MIT.

## 🏁 CONCLUSÃO

Este projeto permitiu a aplicação de conhecimentos em desenvolvimento backend, focando em conceitos de CRUD e integração com bancos de dados. Aprendi a estruturar uma aplicação em módulos e a utilizar ferramentas como TypeORM para simplificar a interação com o banco de dados.

🧑‍💻 "Programar é como escrever um livro. A única diferença é que se você cometer um erro, o livro não vai te deixar ler até corrigir." 😅
