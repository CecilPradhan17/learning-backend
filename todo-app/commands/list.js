import pool from '../db/pool.js';

export const listTodos = async (type) => {
    try{
        if (type === "all"){
            const res = await pool.query("SELECT * FROM todoData;");
            console.log(res.rows);
        }
        else if (type === "pending"){
            const res = await pool.query("SELECT * FROM todoData WHERE completed = false;");
            console.log(res.rows);
        }
        else if (type === "done"){
            const res = await pool.query("SELECT * FROM todoData WHERE completed = true;");
            console.log(res.rows);
        }
        else 
        {
            console.log("Invalid todo type.");
        }
    }
    catch (error){
        console.log("There was an error in list.js: ", error.message);
    }
}