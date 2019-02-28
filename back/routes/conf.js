const mysql = require('mysql');
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'cormobro',
	password : 'Felixlo1#',
	database : 'InPace',
});
module.exports = connection;
