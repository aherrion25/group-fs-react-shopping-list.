const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET request


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