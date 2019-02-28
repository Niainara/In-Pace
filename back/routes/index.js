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

router.get('/api/detail/:id', (req, res) => {
	const idDetail = req.params.id;
	connection.query('SELECT * FROM Prestataire WHERE id_p = ?', [idDetail], function (error, results) {
		if (error) {
			console.log(error);
			res.status(500).send("Erreur lors de la récupération de la pompe funèbre");
		} else {
			console.log(results);
			res.json(results);
		}
	});	
});
module.exports = router;
