# Impulsionar 2.0: Desafio de frontend módulo 3
React Avançado

## Objetivo do desafio
Este desafio vamos construir uma aplicação completa utilizando React, esta aplicação deve ter um sistema de autenticação e uma area restrita onde terá componente de lista de atividades.

## O Desafio
- [ ] Crie uma aplicação uma nova em React (Veja bonus).
- [ ] Utilize o [testing-library](https://testing-library.com/) para testar os componentes.
- [ ] Utilize o [react-router-dom](https://reactrouter.com/web/guides/quick-start) para apresentação das paginas da aplicação.
    - `/auth`: Página de autenticação.
    - `/todo`: Página inicial para quem está autenticado.
    - `/not-found`: Página que deve ser redirecionado todos acessos onde não tenham uma roda definida.
    - `/not-authorized`: Página que deve ser redirecionado todos acessos que não possuem o token.
- [ ] Rota `/auth`.
    - Login com email e senha.
    - O serviço deve ser falso, apenas retorna um token para qualquer tentativa.
    - Armazene esse token de forma que não perca a informação mesmo que o usuário recarregue a página.
- [ ] Rota `/todo`.
    - Apenas usuários autenticados podem acessar essa página.
- [ ] Crie uma API de mock utilizando o [https://mockapi.io/](https://mockapi.io/).
    - [ ] Crie um recurso para seu projeto como `todo`.
    - [ ] Os campos desse recurso devem ser.
        - Titulo com o tipo Sentence.
        - Data de criação com o tipo Recent.
        - Status com o tipo String.
- [ ] Crie um componente para listagem do `todo`.
    - Este componente deve ser apresentado na roda `/todo`.
    - Cada elemento da lista (atividade) deve ficar sobrelinhado e com a cor do texto mais clara.
- [ ] Crie um componente para adicionar um uma atividade no `todo`.
    - Um campo de texto junto de um botão para confirmar a inclusão da atividade.
    - O campo de texto deve limitar o tamanho do texto em 100 caracteres.
- [ ] Crie um componente para alterar a atividade para concluído `todo`.
    - Este componente vai deve ser mostrado em cada atividade apresentada na lista.
- [ ] Crie um hook de serviço para chamar sua API criada anteriormente.
    - Busque todas os resultados da sua API.
    - Adicione uma atividade nova na API.
    - Altere a atividade para status como concluído.
- [ ] Rota `/not-found`.
    - Mostra uma mensagem de que o conteúdo não foi encontrado.
- [ ] Rota `/not-authorized`.
    - Mostra uma mensagem de o acesso não foi autorizado.
- [ ] Crie um script que gere o os arquivos finalizado dessa aplicação, como o `npm run build` da aplicação que fizemos utilizando o CRA.
    - Documente esse processo de build.

## Instruções para Realização do Desafio
- Crie a aplicação sem usar o CRA, com webpack e typescript.
- Faça um fork desse repositório para a sua conta.
- Implemente a sua solução conforme solicitado.
- Compartilhe o link do projeto com o seu mentor.

# Bonus
- Configure o jest para restar apendas componentes de apresentação
- Atinja 70% de cobertura de testes nesses componentes

## Critérios de avaliação
- A aplicação esta rodando?
- O recursos implementados correspondem ao que foi solicitado no desafio?
- A API foi criada?
- A API response as chamadas feitas pelo aplicação?
- Você consegue ver a lista de atividades na página `/todo`?
- Você consegue adicionar uma nova atividade?
- Você consegue marcar uma atividade como concluída?
- Quando você acessa uma rota que não existe você ve uma mensagem amigável?
- Quando você acessa uma rota antes de se autenticar você é informado que não possui autorização?
- Depois de autenticado você consegue acessar a rota `/todo`?
- Nessa roda você ve um campo de text com um botão logo acima de uma lista de atividades?
- Você consegue inserir um texto e ao apertar o botão que tem ao lado esse texto aparece na lista abaixo?
- O tamanho máximo do texto inserido é 200 caracteres?
- Na lista cada atividade possui um botão que ao clicar nele o texto aparece em sobrelinhado?
- O código apresentado está bem organizado?
- A indentação do código esta padronizada?
- O projeto possui um Readme com instruções para que essa aplicação rode?
- Os testes unitário estão rodando e sem erros?
- Os testes cobre ao menos 30% de código do projeto?
- É possível gerar o bundle dessa aplicação?
- [BONUS] A cobertura de teste está apenas nos componentes de apresentação?
- [BONUS] Estes testes atingem 70% ou mais de cobertura?