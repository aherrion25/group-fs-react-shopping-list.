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


// PUT request


// DELETE request


module.exports = router;