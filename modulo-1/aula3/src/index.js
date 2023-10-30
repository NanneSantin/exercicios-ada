require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(route);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Servidor na porta ${port}`));
