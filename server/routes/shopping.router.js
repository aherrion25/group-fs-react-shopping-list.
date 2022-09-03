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
router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    console.log(listId);
    const queryText = `UPDATE "list" SET (quantity, id) VALUES $1, $2;`
    pool.query(queryText, [listId]).then((results) => {
        res.sendStatus(200);
        console.log('Error in Put list', error);
    res.sendStatus(500);

    })

})

// DELETE request
router.delete('/:id', (req, res) => {
    const queryText ='DELETE FROM "list" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in Task Delete', error);
        res.sendStatus(500);
    })
})

module.exports = router;