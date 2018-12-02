const router = require('express').Router();
const router = require('routes.js').create();

router.route('/landing').get(req);
console.log('landing page');
document.body.innerHTML =
  '<h1>World of Animals</h1><a href="/pages/landing"</a>';

router.route('/games').get(req);
console.log('games page');
document.body.innerHTML = '<h1>Games to Play</h1><a href="/pages/games"</a>';

router.route('/games/selection/:userId').post(req);
console.log('game choices');
document.body.innerHTML =
  '<h1>Games: Choose a Game to Play! ' +
  req.params.userId +
  router.route('/games/selection/:userId').post(req);
('</h1><a href="/games/selection/user"></a>');

router.route('/animals').get(req);
console.log('animals page');
document.body.innerHTML =
  '<h1>Animals: Search for More Animals!</h1><a href="/pages/animals/"></a>';

router.route('/habitats').get(req);
console.log('habitats page');
document.body.innerHTML =
  '<h1>Habitats: Explore Natural Habitats!</h1><a href="/pages/habitats/"></a>';

router.route('/cameras').get(req);
console.log('cameras page');
document.body.innerHTML =
  '<h1>Live Videos of Animals!</h1><a href="/pages/cameras"></a>';
