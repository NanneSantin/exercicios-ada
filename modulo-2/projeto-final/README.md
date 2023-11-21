# Lógica de Programação - Projeto final

## Instrução de Uso
>Todas as funções devem ser executadas no arquivo index.js

1. **Criar tarefa**

Para adicionar uma nova tarefa, utilize a função `creatTask` informando o título e a descrição desejados.

```http
createTask('Exemplo', 'Essa tarefa está sendo criada para fins de exemplo');
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Mínimo 4 caracteres, sendo que precisa conter pelo menos 3 letras. |
| `description`      | `string` | **Obrigatório**. Mínimo 20 caracteres. |

Função com retorno e sem impressão na tela. Para visualizar as tarefas, use `console.log(tasks)` ou a função `getTasks()`.

2. **Atualizar tarefa**

Atualize uma tarefa existente fornecendo o ID da tarefa, o novo título e a nova descrição.
```http
updateTask(2, 'Atualizar uma tarefa', 'Criar uma função que atualiza uma tarefa já criada.');
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. |
| `title`      | `string` | **Obrigatório**. Mínimo 4 caracteres, sendo que precisa conter pelo menos 3 letras. |
| `description`      | `string` | **Obrigatório**. Mínimo 20 caracteres. |

Função com retorno e sem impressão na tela. Para visualizar as tarefas, use `console.log(tasks)` ou a função `getTasks()`.

3. **Remover tarefa**

Remova uma tarefa utilizando o ID como parâmetro.

```http
removeTask(2);
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório.**. |

Função com retorno e sem impressão na tela. Para visualizar as tarefas, use `console.log(tasks)` ou a função `getTasks()`.

4. **Visualizar tarefas**

Para vistualizar todas as tarefas, basta executar a função sem parâmetros.

```http
getTasks();
```

5. **Visualizar uma tarefa específica**

Para ver uma tarefa específica, forneça o ID como parâmetro.

```http
getTasks(1);
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório.**. |

## Descrição do desafio
    
### O que?
    
Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de lista de tarefas (ToDo List). 
    
### Requisitos

Dentre as funcionalidades, espera-se que seja possível:

- Adicionar uma tarefa (id, titulo e descrição)
- Editar uma tarefa salva (titulo e descrição)
- Remover uma tarefa salva
- Listar todas as tarefas salvas
- Obter uma tarefa, através de um parâmetro (id)
 ---
### Validações

- A tarefa não pode ter titulo e descrição vazios.
- O título não deve conter apenas números
- O titulo deve ter no mínimo 4 caracteres.
- A descrição deve ter no mínimo 20 caracteres.
- Não deve haver tarefas com o título duplicado.

### Observações
    
Não haverá a persistência das tarefas em banco de dados. Para isso, podem utilizar um `array` para armazenar a lista das tarefas cadastradas.
