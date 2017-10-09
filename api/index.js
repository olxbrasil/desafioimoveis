const express = require('express');
const json = require('./valores.json');
const cors = require('cors');
const app = express();

const keys = Object.keys(json);

const arr = [];

const corsOptions = {
	origin: '*'
  }

app.use(cors(corsOptions))
app.get('/', (req, res) => res.json(json));
app.listen(4000, () => console.log('Acesse localhot:4000 ou 0.0.0.0:4000'));
