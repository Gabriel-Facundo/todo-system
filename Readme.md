# Impulsionar 2.0: Desafio de frontend módulo 3
React Avançado

## Objetivo do desafio
Construir uma aplicação completa utilizando React, esta aplicação dese ter um sistema de autenticação e apresentar dados em uma rela de dashboard.

## O Desafio
- [ ] Crie uma aplicação sem utilizar o CRA, com webpack
    - [ ] Utilize o testing library para testar os componentes
    - [ ] Utilize o react router dom para apresentação das paginas da aplicação
        - `/auth`: Página de autenticação
        - `/dashboard`: Página inicial para quem está autenticado
        - `/not-found`: Página que deve ser redirecionado todos acessos onde não tenham uma roda definida
        - `/not-authorized`: Página que deve ser redirecionado todos acessos que não possuem o token
    - [ ] `/auth`
        - Login com email e senha
        - O serviço deve ser falso, apenas retorna um token para qualquer tentativa
        - Armazene esse token de forma que não perca a informação mesmo que o usuário recarregue a página
    - [ ] `/dashboard`
        - Apenas usuários autenticados podem acessar essa página
    - [ ] Crie um componente de aprovação de comentários
        - Uma lista com comentários, utilize um mock para simular dados reais.
    - [ ] Crie uma componente de de busca para filtrar os comentários feitos.
    - [ ] Crie um componente de ações para aprovar ou reprovar um comentário.
        - Este componente vai ser renderizado em cada comentário feito.
    - [ ] Crie um hook de serviço para chamar um API (fictícia) de comentários
        - Precisa ter uma função que retorna a lista de comentários filtrados
        - Precisa ter uma que aprove o comentário
        - Precisa ter uma função que reprove o comentário

## Instruções para Realização do Desafio
- Faça um fork desse repositório para a sua conta
- Implemente a sua solução conforme solicitado
- Compartilhe o link do projeto com o seu mentor

## Critérios de avaliação
- A aplicação deve estar funcionando de acordo com o que foi solicitado
- Organização do código
- Utilize inglês para nomear variáveis, funções etc.
- Boa indentação do código
    - Use ferramentas com o [https://prettier.io/](https://prettier.io/), instale plugins no seu editor de código.
