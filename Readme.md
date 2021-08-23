# Impulsionar 2.0: Desafio de frontend módulo 3
React Avançado

## Objetivo do desafio
Neste desafio vamos construir uma aplicação completa utilizando React, esta aplicação deve ter um sistema de autenticação e uma área restrita onde terá componente de lista de atividades.

## O Desafio
- [ ] Crie uma aplicação nova em React (Veja bonus).
- [ ] Utilize o [testing-library](https://testing-library.com/) para testar os componentes.
- [ ] Utilize o [react-router-dom](https://reactrouter.com/web/guides/quick-start) para apresentação das páginas da aplicação.
    - `/auth`: Página de autenticação.
    - `/todo`: Pagina inicial para quem está autenticado.
    - `/not-found`: Redirecione para esta página todo acesso a uma rota inexistente.
    - `/not-authorized`: Redirecione para esta página todo acesso a uma rota que não possuir autorização de acesso.
- [ ] Rota `/auth`.
    - Login com email e senha.
    - O serviço deve ser falso, apenas retorna um token para qualquer tentativa.
    - Armazene esse token de forma que não perca a informação mesmo que o usuário recarregue a página.
- [ ] Rota `/todo`.
    - Apenas usuários autenticados podem acessar essa página.
- [ ] Crie uma API de mock utilizando o [https://mockapi.io/](https://mockapi.io/).
    - [ ] Crie um recurso para seu projeto como `todo`.
    - [ ] Os campos desse recurso devem ser.
        - Título com o tipo Sentence.
        - Data de criação com o tipo Recent.
        - Status com o tipo String.
- [ ] Crie um componente para listagem do `todo`.
    - Este componente deve ser apresentado na roda `/todo`.
    - Cada elemento da lista (atividade) deve ficar rasurado e com a cor do texto mais clara.
- [ ] Crie um componente para adicionar um uma atividade no `todo`.
    - Um campo de texto junto de um botão para confirmar a inclusão da atividade.
    - O campo de texto deve limitar o tamanho do texto em 100 caracteres.
- [ ] Crie um componente para alterar a atividade para concluído `todo`.
    - Este componente deve ser mostrado em cada atividade apresentada na lista.
- [ ] Crie um hook de serviço para chamar sua API criada anteriormente.
    - Busque todos os resultados da sua API.
    - Adicione uma atividade nova na API.
    - Altere a atividade para status como concluído.
- [ ] Rota `/not-found`.
    - Mostra uma mensagem de que o conteúdo não foi encontrado.
- [ ] Rota `/not-authorized`.
    - Mostra uma mensagem de que o acesso não foi autorizado.
- [ ] Crie um script que gere o os arquivos finalizado dessa aplicação, como o `npm run build` da aplicação que fizemos utilizando o CRA.
    - Documente esse processo de build.

## Instruções para Realização do Desafio
- Crie a aplicação sem usar o CRA, com webpack e typescript.
- Faça um fork do repositório para a sua conta.
- Implemente a sua solução conforme solicitado.
- Compartilhe o link do projeto com o seu mentor.

# Bônus
- Configure o jest para restar apenas componentes de apresentação
- Atinja 70% de cobertura de testes nesses componentes

## Critérios de avaliação
- A aplicação está rodando?
- Os recursos implementados correspondem ao que foi solicitado no desafio?
- A API foi criada?
- A API responde às chamadas feitas pela aplicação?
- Você consegue ver a lista de atividades na página `/todo`?
- Você consegue adicionar uma nova atividade?
- Você consegue marcar uma atividade como concluída?
- Quando você acessa uma rota que não existe você vê uma mensagem amigável?
- Quando você acessa uma rota antes de se autenticar você é informado que não possui autorização?
- Depois de autenticado você consegue acessar a rota `/todo`?
- Nessa rota você vê um campo de texto com um botão logo acima de uma lista de atividades?
- Você consegue inserir um texto e ao apertar o botão que tem ao lado esse texto aparece na lista abaixo?
- O tamanho máximo do texto inserido é 200 caracteres?
- Na lista, cada atividade possui um botão que ao clicar nele o texto aparece em rasurado?
- O código apresentado está bem organizado?
- A indentação do código está padronizada?
- O projeto possui um Readme com instruções para que essa aplicação rode?
- Os testes unitários estão rodando e sem erros?
- Os testes cobrem ao menos 30% de código do projeto?
- É possível gerar o bundle dessa aplicação?
- [BÔNUS] A cobertura de teste está apenas nos componentes de apresentação?
- [BÔNUS] Estes testes atingem 70% ou mais de cobertura?