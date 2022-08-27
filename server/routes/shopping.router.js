const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET request
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM list ORDER BY name, quantity DESC;`;
    pool.query(sqlText)
    .then((result) => {
        console.log(`Received data from database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error in making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

// POST request
router.post('/', (req, res) =>{
    const item = req.body;
    const sqlText = `INSERT INTO list (name, quantity)
    VALUES ($1, $2);`
    pool.query(sqlText, [item.name, item.quantity])
    .then((results)=>{
        console.log(`Added to the shopping list`, item);
        res.sendStatus(201);
    }).catch((error) =>{
    console.log('Error in router.POST', error);
    res.sendStatus(500);
    });
});

// PUT request


// DELETE request


module.exports = router;