const mysql = require('mysql');
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'cormobro',
	password : 'cormobro',
	database : 'Felixlo1#',
});
module.exports = connection;
