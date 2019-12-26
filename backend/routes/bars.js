const router = require('express').Router();
let Bar = require('../models/bar.model');

router.route('/').get((req, res) => {
  Bar.find()
    .then(bars => res.json(bars))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const neighborhood = req.body.neighborhood;
  const deal = req.body.deal;

  const newBar = new Bar({
    name,
    neighborhood,
    deal,
  });

  newBar.save()
    .then(() => res.json('Bar added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;