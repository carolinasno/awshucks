var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Oyster = new Schema({
  name: String,
  location: String,
  species: String,
  oyster_availability: String,
  size: String,
  oyster_cultivation: String,
  oyster_flavor_profile: String
});

module.exports = mongoose.model('Oyster', Oyster);
