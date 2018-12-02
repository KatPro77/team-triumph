const axios = require('axios');
const router = require('express').Router();

router.get('/animals', (req, res) => {
  axios
    .get(
      'http://pixabay.com/api/?q= "" &key=10803476-df1ba506200da6c7fb26617df&category=animals&safesearch=true',
      { params: req.query }
    )
    .then(({ data: { results } }) => res.json(results))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;

//
//export default {
// Finds all animals
//getAnimals: function() {
//return axios.get('/api/animals');
//},
// Finds animals with a given ID
//getAnimals: function(id) {
// return axios.get('/api/animals/' + id);
//},
// Deletes the animals with a given ID
//deleteAnimals: function(id) {
//  return axios.delete('/api/animals/' + id);
//},
// Saves an animal to the database
//saveAnimal: function(animalData) {
// return axios.post('/api/animals', animalData);
//}
//};
