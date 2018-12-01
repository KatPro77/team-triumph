var router = require;
var router = require('routes.js').create();

router.route('/home/:userId', function(req) {
  console.log('home page');
  document.body.innerHTML =
    '<h1>Home ' + req.params.userId + '</h1><a href="/"User></a>';
});

router.route('/games', function(req) {
  console.log('games page');
  document.body.innerHTML =
    '<h1>Games</h1><a href="/games/selection">Selected Game</a>';
});

router.route('/animals', function(req) {
  console.log('animals page');
  document.body.innerHTML =
    '<h1>Animals</h1><a href="/animals/selection">Selected Animal</a>';
});

router.route('/habitats', function(req) {
  console.log('habitats page');
  document.body.innerHTML =
    '<h1>Habitats</h1><a href="/habitats/selection">Selected Habitat</a>';
});
