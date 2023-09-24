const PORT = process.env.PORT || 8080;
const express = require('express');
const app =  express();
const pool = require('./db');

app.get('/todos', async (req, res) => {
    try{
        const todos = await pool.query('SELECT * FROM todos');
        res.json(todos.rows);
    }catch(err){
        console.error(err);
    }
});

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));

