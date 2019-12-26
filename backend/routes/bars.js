const router = require('express').Router();
let Bar = require('../models/bar.model');

router.route('/').get((req, res) => {
  Bar.find()
    .then(bars => res.json(bars))
    .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;

