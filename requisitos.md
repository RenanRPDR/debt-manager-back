# Feactures do sistema

## Cadastro de dívida

Requisitos funcionais (O que a aplicacao deve fazer)
**RF**
- O usuário deve poder adicionar uma nova dívida, informando qual cliente está relacionada a ela;
- O usuário deve poder listar todas as dívidas associadas a um determinado cliente;
- O usuário deve poder obter detalhes de uma dívida;
- O usuário deve poder editar uma dívida;
- O usuário deve poder deletar uma dívida.

Requisitos não funcionais (Tecnologia e a forma de seu funcionamento)
**RNF**
- Para a criação de uma dívida, deve-se acessar o JSONPlaceholder e obter a lista de clientes, de modo que o usuário da aplicação possa escolher um cliente na hora da criação da dívida.

Regras de negócio (Forma de funcionamento da aplicacao, olhar exemplo)
**RN**
- Deve-se associar a criação de uma divida com um usuário existente

---
Atributos da divida
- o Id da dívida,
- o Id do usuário no JSONPlaceholder
- o Motivo da dívida
- o Data da dívida
- o Valor
