const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/school-connections');

const routes = require('./config/routes');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

app.use(routes);

app.listen(3000, () => console.log('youre clear for take off on port 3000'));
