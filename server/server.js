const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const listRouter = require('./routes/shopping.router.js');
const PORT = process.env.PORT || 5006;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/list', listRouter);
/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});