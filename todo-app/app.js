import { addTodo } from './commands/add.js';
import { deleteTodo } from './commands/delete.js';
import { listTodos } from './commands/list.js';
import { updateTodo } from './commands/done.js';

const [ , , command, query ] = process.argv;

if ( command == '--new'){
    addTodo(query);
}
else if( command == '--delete'){
    deleteTodo(query);
}
else if( command == '--list'){
    listTodos(query);
}
else if( command == '--done'){
    updateTodo(query);
}


