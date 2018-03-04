module.exports = function(app, db) {

	var ObjectID = require('mongodb').ObjectID;

	app.get('/crud/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
		db.collection('crud').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'an error has occured' });
			} else {
				res.send(item);
			}
		})
	});

  app.post('/crud', (req, res) => {
		const details = { title: req.body.title };
		db.collection('crud').insert(details, (err, result) => {
			if (err) {
				res.send({ 'error': 'an error has occured' });
			} else {
				res.send(result.ops[0]);
			}
		})
  });

};