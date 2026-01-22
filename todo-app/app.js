import { addTodo } from './commands/add.js';
import { deleteTodo } from './commands/delete.js';
import { listTodos } from './commands/list.js';
import { updateTodo } from './commands/done.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8')
);

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
else if(command == '--help'){
    console.log(`    "--new": to add a new todo item,
    "--list [all|pending|done]": to list the todo items,
    "--done [id]": to update a todo item,
    "--delete [id]": to delete a todo item,
    "--help": to list all the available options,
    "--version": to print the version of the application`);
}
else if(command == '--version'){
    console.log(pkg.version);
}


