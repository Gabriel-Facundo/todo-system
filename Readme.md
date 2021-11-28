Por enquanto, a metodologia que eu vou fazer quanto aos "Todos" será a seguinte:
    Ao adicionar um todo, irá fazer um post na API desse novo Todo, mas o front não chamará novamente
    a API, ele terá um array interno já com os todos (que ele deu get ao renderizar) e também dará um
    concat nesse mesmo array com o novo todo (mas só após o post ser sucesso, pois se o post der erro e ele adicionar no array, vai enganar o usuário fazendo-o pensar que adicionou de verdade).
    O mesmo acontecerá para clicar em "Completar" e "Descompletar".
    Optei por essa abordagem, pois é mais eficiente e rápido pro front tratar tudo, pois ele precisará
    fazer menos chamadas para a API (o que, levando em consideração uma situação que eu tenha 100000000000 todos, seria uma eternidade para fazer qualquer coisa se ele sempre precisasse chamar a API para atualizar os dados no front, ele sempre vai precisar chamar a API para salvar no servidor), apesar de ser mais "doloroso" ao codar.

    Outra opção seria: Ao adicionar o Todo ou clicar em "Completar" ou "Descompletar", ele faria a atualização na API e já chamasse a API novamente para re renderizar o conteúdo atualizado, essa forma seria mais fácil, mas cai no problema que eu situei acima, se eu tiver 100000000 todos (eu sei que não é possível, pois o MockAPI só permite 100, mas é uma situação que poderia ser real), cada clique seria uma eternidade dessa forma, pois além de um post/put, teria um get.