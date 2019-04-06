const express = require('express');
const app = express();
const Pool = require('pg').Pool;
// Your code goes here...
//access the database.
const db = new Pool({
	user: 'Maaly', // Your O/S user name
	host: 'localhost',
	database: 'Maaly', // ... and again.
	password: 'maaly', // The one you gave yourself above
	port: 5432
});

app.listen(3000, function() {
	console.log('Server started on port 3000.');
});
