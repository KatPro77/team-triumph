const axios = require('axios');
const router = require('express').Router();
const router = require('navbarRoutes.js').create();

router.route('/home').get(req);
console.log('landing page');
document.body.innerHTML = '<h1>World of Animals</h1><a href="/pages/home"</a>';

router.route('/animals').get(req);
console.log('animals page');
document.body.innerHTML =
  '<h1>Animals: Search for More Animals!</h1><a href="/pages/animals/"></a>';

router.route('/habitats').get(req);
console.log('habitats page');
document.body.innerHTML =
  '<h1>Habitats: Explore Natural Habitats!</h1><a href="/pages/habitats/"></a>';

//we have 2 different game choices, so we created two separate get and post routes for each of the games
router.route('/games').get(req);
console.log('games page');
document.body.innerHTML =
  '<h1>First Game to Play</h1><a href="/pages/games"</a>';

router.route('/games/selection/:userId').post(req);
console.log('game choice 1');
document.body.innerHTML =
  '<h1>First Game to Play! ' +
  req.params.userId +
  router.route('/games/selection/:userId').post(req);
('</h1><a href="/games/selection/user"></a>');
//...and game 2
router.route('/games').get(req);
console.log('games page');
document.body.innerHTML =
  '<h1>Second Game to Play</h1><a href="/pages/games"</a>';

router.route('/games/selection/:userId').post(req);
console.log('game choice 2');
document.body.innerHTML =
  '<h1>Second Game to Play! ' +
  req.params.userId +
  router.route('/games/selection/:userId').post(req);
('</h1><a href="/games/selection/user"></a>');

router.route('/cameras').get(req);
console.log('cameras page');
document.body.innerHTML =
  '<h1>Live Videos of Animals!</h1><a href="/pages/cameras"></a>';

module.exports = router;
