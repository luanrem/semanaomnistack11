const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();


app.use(cors());
app.use(express.json()) //Isso diz para a aplicação que estamos usando json como body do post na aplicação
app.use(routes)


app.listen(3333);