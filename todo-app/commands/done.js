import pool from '../db/pool.js';

export const updateTodo = async (todoId) => {
    try{
        await pool.query("UPDATE todoData SET completed = true WHERE id = $1;", [todoId]);
        console.log(`Todo with id: ${todoId} has been updated.`);
    }
    catch(error){
        console.log("There was an error in done.js: ", error.message);
    }
}