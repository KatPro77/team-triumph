const axios = require('axios');
const router = require('express').Router();
const router = require('apiRoutes.js').create();

router.get('/api', (req, res) => {
  axios
    .get(
      'http://pixabay.com/api/?q= "" &key=10803476-df1ba506200da6c7fb26617df&category=animals&safesearch=true',
      { params: req.query }
    )
    .then(({ data: { results } }) => res.json(results))
    .catch((err) => res.status(422).json(err));
});

router.get('/games', (req, res) => {
  axios
    .get(
      'http://pixabay.com/api/?q= "" &key=10803476-df1ba506200da6c7fb26617df&category=animals&safesearch=true',
      { params: req.query }
    )
    .then(({ data: { results } }) => res.json(results))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
