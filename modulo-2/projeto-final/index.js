const tasks = require('./database');
const {
    createTask,
    updateTask,
    removeTask,
    getTasks
} = require('./functions');

//Para criar as tarefas informar os parâmetros título e descrição.
createTask('Exemplo', 'Essa tarefa está sendo criada para fins de exemplo');

//Para atualizar uma tarefa informar os parâmetros:
//id da tarefa a ser atualizada, titulo novo e descrição nova.
updateTask(2, 'Atualizar uma tarefa', 'Criar uma função que atualiza uma tarefa já criada.');

//Para remover uma tarefa informar o ID da tarefa a ser removida como parâmetro da função.
removeTask(2);

//Para retornar todas as tarefas, basta executar a função, sem passar nenhum parâmetro.
getTasks();

//Para retornar uma tarefa específica, passar como parâmetro da função o ID da tarefa.
getTasks(1);

console.log(tasks);