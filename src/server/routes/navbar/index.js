const path = require('path');
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const animalsRoutes = require('./animalsRoutes');
const habitatsRoutes = require('./habitatsRoutes');
const gamesRoutes = require('./gamesRoutes');
const camsRoutes = require('./camsRoutes');

router.use('/home', homeRoutes);
router.use('/animals', animalsRoutes);
router.use('/habitats', habitatsRoutes);
router.use('/games', gamesRoutes);
router.use('/cams', camsRoutes);

//If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
