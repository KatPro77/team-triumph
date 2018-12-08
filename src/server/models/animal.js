const sequelize = require('sequelize');
const Schema = sequelize.Schema;

const animalSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  lifespan: String
});

const Animal = sequelize.model('Animal', animalSchema);

module.exports = Animal;
