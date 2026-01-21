import pool from '../db/pool.js';

export const deleteTodo = async (todoId) => {
    try {
        const res = await pool.query("DELETE FROM todoData WHERE id = $1;", [todoId]);

        if (res.rowCount === 0) {
            console.log("There were no matching todos.");
        }
        else{
            console.log(`The todo "${todoId}" has been deleted.`);
        }
    }
    catch(error) {
        console.log("There was an error: ", error.message);
    }
};

