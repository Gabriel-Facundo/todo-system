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
- [ ] Insira os componentes feitos nos desafios 1 e 2 neste projeto.
    - [ ] Este componente deve ser apresentado na roda `/todo`.
- [ ] Crie um hook de serviço para chamar sua API criada anteriormente.
    - [ ] Integre o serviço com o componente através da camada de 'container', um componente que deve centralizar todo o estado para esta parte da aplicação.
    - [ ] Busque todos os resultados da sua API.
    - [ ] Adicione uma atividade nova na API.
    - [ ] Altere a atividade para status como concluído.
- [ ] Rota `/not-found`.
    - [ ] Mostra uma mensagem de que o conteúdo não foi encontrado.
- [ ] Rota `/not-authorized`.
    - [ ] Mostra uma mensagem de que o acesso não foi autorizado.
- [ ] Crie um script que gere o os arquivos finalizado dessa aplicação, como o `npm run build` da aplicação que fizemos utilizando o CRA.
    - [ ] Documente esse processo de build no readme.
- [ ] Faça um "readme" com instruções de como o aplicativo deve ser executado.

## Instruções para Realização do Desafio
- Siga as mesmas instruções que foram passada no desafio 1, quando a nomenclatura dos arquivos e organização das pastas.
- Reaproveite o código criado no desafio 1 e 2.
- Organize seu projeto assim como o exemplo [deste projeto](./examples).
- Faça um fork do repositório para a sua conta.
- Implemente a sua solução conforme solicitado.
- Compartilhe o link do projeto com o seu mentor.

# Bônus
- Crie a aplicação sem usar o CRA, com webpack e typescript.
- Configure o Jest para testar apenas componentes de apresentação.
- Atinja 70% de cobertura de testes nesses componentes.

## Critérios de avaliação
- Existe um documento "Readme" no projeto com informações deste desafio?
- Os componentes estão em arquivos separados?
- Cada componente possui uma pasta?
- O nome do arquivo é o mesmo do componente?
- O nome dos componentes estão em PascalCase?
- Cada componente possui um teste separado?
- Os arquivos de teste possuem a extensão `.spec.ts`?
- Cada arquivo de teste possui um `describe`?
- Cada teste possui apenas um `assertion`?
- A indentação do código está padronizada?
- O projeto esta separada em pastas assim como mostra o [exemplo](./examples).
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
- Na lista, cada atividade possui um checkbox que ao seleciona-lo o texto aparece em rasurado?
- O projeto possui um Readme com instruções para que essa aplicação rode?
- Os testes unitários estão rodando e sem erros?
- Os testes cobrem ao menos 30% de código do projeto?
- É possível gerar o bundle dessa aplicação?
- [BÔNUS] O projeto em react foi feito sem o CRA? Apenas webpack com typescript.
- [BÔNUS] A cobertura de teste está apenas nos componentes de apresentação?
- [BÔNUS] Estes testes atingem 70% ou mais de cobertura?