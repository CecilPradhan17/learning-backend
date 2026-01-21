import pool from '../db/pool.js';

export const addTodo = async (todo) => {
    try {
        await pool.query(`INSERT INTO todoData (todo) VALUES ($1);`,[todo]);
        console.log(`The task: ${todo} has been added.`);
    }
    catch (error){
        console.log("There was an error: ", error.message);
    }
}
