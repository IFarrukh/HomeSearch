const express = require('express');

const bp = require('body-parser');
const csv = require('csv-parser');
const fs = require('fs');
var cors = require('cors');

const port = 4000;
const results = [];

// Int app
const app = express();
var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// setting cors
app.use(cors(corsOptions));

//reading csv file
fs.createReadStream('./data.csv')
	.pipe(csv())
	.on('data', (data) => results.push(data))
	.on('end', () => {});

// setting up body parser
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get('/', (req, res) => {
	res.send('Success');
});

// search route
app.get('/search/:term', (req, res) => {
	const { term } = req.params;

	res.setHeader('Content-Type', 'application/json');
	res.end(
		JSON.stringify({
			homes: term ? results.filter((home) => home['ADDRESS'].match(term)) : [],
		}),
	);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
