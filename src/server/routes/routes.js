var router = require;
var router = require('routes.js').create();

router.route('/landing', function(req) {
  console.log('landing page');
  document.body.innerHTML =
    '<h1>World of Animals</h1><a href="/pages/landing"</a>';
});

router.route('/games/selection/:userId', function(req) {
  console.log('games page');
  document.body.innerHTML =
    '<h1>Games: Choose a Game to Play! ' +
    req.params.userId +
    '</h1><a href="/games/selection/user"></a>';
});

router.route('/animals', function(req) {
  console.log('animals page');
  document.body.innerHTML =
    '<h1>Animals: Search for More Animals!</h1><a href="/pages/animals/"></a>';
});

router.route('/habitats', function(req) {
  console.log('habitats page');
  document.body.innerHTML =
    '<h1>Habitats: Explore Natural Habitats!</h1><a href="/pages/habitats/"></a>';
});

router.route('/cameras', function(req) {
  console.log('cameras page');
  document.body.innerHTML =
    '<h1>Live Videos of Animals!</h1><a href="/pages/cameras"></a>';
});
