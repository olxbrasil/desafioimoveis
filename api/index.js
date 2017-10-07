const express = require('express');
const json = require('./valores.json');
const app = express();

const keys = Object.keys(json);

const arr = [];

keys.map((e, i) => {
	const obj = {
		id: i + 1,
		state: e,
		information: {
			rent: json[e].aluguel,
			purchase: json[e].compra
		},
	}
	arr.push(obj);
});

app.get('/', (req, res) => res.json(arr));
app.listen(4000, () => console.log('Acesse localhot:4000 ou 0.0.0.0:4000'));
