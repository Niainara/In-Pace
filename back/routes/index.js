var express = require('express');
var router = express.Router();
const connection = require('./conf');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	extended: true
}));

router.get('/api/pompes', function(req, res, next) {
  connection.query('SELECT * FROM Prestataire', function (error, results) {
		if (error) {
			console.log(error);
			res.status(500).send("Erreur lors de la récupération des pompes funèbres");
		} else {
			console.log(results);
			res.json(results);
		}
	});
});

module.exports = router;
