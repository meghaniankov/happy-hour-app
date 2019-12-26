const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const barSchema = new Schema({
  name: { type: String, required: true },
  neighborhood: { type: String, required: true },
  deal: { type: String, required: true }
});

const Bar = mongoose.model('Bar', barSchema);

module.exports = Bar;