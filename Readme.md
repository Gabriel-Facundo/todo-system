# Opa meu camarada, tudo bem? 🧞

​	Acredito que esse projeto seja o mais longo do projeto, tentei fazer o máximo do projeto para estilizar, separar os componentes, organizar as pastas, abstração de recursos. Atualmente, o projeto tem somente uma única linha que não foi coberta de teste, pois ao entrar na rota de "todo", é feito automaticamente uma chamada GET para pegar todos os "Todos" na API, mas ao sair da página antes da requisição terminar, irá lançar um erro no console (que não quebra a aplicação), que ele está tentando atualizar um hook que não existe mais. Para controlar isso, eu implementei um callback no final do useEffect que cancela esse GET, para cobrir essa linha, eu precisaria mexer no hook diretamente dentro do teste e não soube como realizar isso no momento. 

​	Como o projeto Impulsionar está próximo de acabar, vou ficar devendo somente essa única linha no coverage para poder seguir com os próximos desafios.

​	Então, vou resumir alguns detalhes do projeto:

Dependências utilizadas:

* Material UI
* React Router Dom
* Styled Components
* Axios
* TS-Jest



​	Observações:

* Ao abrir o projeto, instalar as dependências usando o comando "npm install"

* Para efetuar os testes, basta rodar o comando "npm run test-coverage", o projeto está configurado para testar somente componentes de apresentação.

* Para efetuar a build do projeto, comando: "npm build"
* Para subir o projeto em servidor de development: "npm start"



No mais, obrigado por analisar o teste!! 👋🏻



​	

