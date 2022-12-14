const express = require('express');
require('dotenv').config();
const cors = require('cors');

const logger = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`\nSTARTING SERVER\n✔  http://localhost:${ process.env.PORT }`);
});