const router = require('express').Router();
let Neighborhood = require('../models/neighborhood.model');

router.route('/').get((req, res) => {
  Neighborhood.find()
    .then(neighborhoods => res.json(neighborhoods))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;