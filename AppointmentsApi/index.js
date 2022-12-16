const express = require('express');
require('dotenv').config();
const cors = require('cors');

const logger = require('morgan');
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/shop', require('./routes/shop'));

app.listen(process.env.PORT, () => {
    console.log(`\nSTARTING SERVER\n✔  http://localhost:${ process.env.PORT }`);
});