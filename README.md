<h2 align="center">
    <tittle>Backend do Debts Management</tittle>
<h2 >

# Indicee
- [Sobre](#-sobre)
- [Implementações e configurações realizadas](#-implementações-e-configurações-realizadas)
- [Tecnologias e lib's](#-tecnologias-e-libs)
- [Ferramentas](#-ferramentas)
- [Como baixar e rodar o projeto ?](#-como-baixar-e-rodar-o-projeto)

## 💬️ Sobre o projeto

O problema que iremos enfrentar nesse projeto é o gerenciamento de dívidas e devedores, realizando a relação das dívidas com as pessoas existentes no JSONPlaceholder.

## O que é o {...} JSONPlaceholder ?

É uma API pública para testes. Acesse https://jsonplaceholder.typicode.com, para ver uma breve explicação do mesmo e os recursos que são disponibilizados. O principal recurso abordado
aqui é o /users, que retorna uma lista de usuários com diversos atributos que iremos utilizar.

---

## 👨‍💻️ Implementações e configurações realizadas
- Criação de uma dívida associando ela a uma pessoa ✔️;
- Listar todas as dívidas de um usuário ✔️;
- Consultar informações de uma dívida ✔️;
- Atualizar informações de uma dívida ✔️;
- Deltar uma dívida ✔️;
- Consulta de todas dívidas cadastradas ✔️;
- Listar usuários e seus dados em uma API externa ✔️;
- Listar os dados de um usuário em uma API externa ✔️;

---

## 🚀 Tecnologias e libs [ATUALIZAR]

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/about/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- [TypeORM](https://typeorm.io/)
- [yarn](https://yarnpkg.com/)
- [JWT](https://jwt.io/)
- [Multer](https://www.npmjs.com/package/multer)

---

## 🔧️ Ferramentas [ATUALIZAR]

Ferramentas utilizadas nesse projeto:

- [VSCode](https://code.visualstudio.com/)
- [Insomnia](https://insomnia.rest/download/)
- [DBeaver](https://dbeaver.io/)
- [Git-e-Github](https://github.com/)

---

## 🗂 Como baixar e rodar o projeto [ATUALIZAR]

<p>O banco de dados está rodando em um "Docker" para fins de estudo, vamos fazer a instalação e a configuração dessa base de dados com a aplicação.</p>


<p>
Rodei o ambiente em um linux com Ubuntu 18.04 LTS mas também é possível realizar a instalação no windows ou mac. Segue abaixo os links para instalação:

- Ubuntu: https://docs.docker.com/engine/install/ubuntu/
- Windows ou Mac: https://docs.docker.com/desktop/

</p>


<p>Com o Docker instalado podemos seguir os próximos passos:</p>


```bash
    # Clone o repositório no github
    $ git clone https://github.com/RenanRPDR/GoStack11-iniciando-back-end.git

    # Entre no diretório "primeiro-projeto-node"
    $ cd GoStack11-iniciando-back-end/

    # Rode um yarn para instalar as dependências do projeto
    $ yarn install

    # Rode um migrate para criar as tabelas no banco de dados
    $ yarn typeorm migrate:run

    # De um start no servidor e "have fun!😁️"
    $ yarn dev:server
```
---

<h3 align="center">Feito por Renan Portugal do Rio</h3>

  <h1 align="center">
    <img src="https://ik.imagekit.io/911o9a87sc/logo_ytBUeCmpV.png"  width=100 height=125>
</h1>
