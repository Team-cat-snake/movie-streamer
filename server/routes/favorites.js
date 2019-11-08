const express = require('express');
const favController = require('../controllers/favController');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('..')
})

router.post('/', favController.getFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
});

router.post('/add', favController.addFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
})

router.delete('/', favController.deleteFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
})

module.exports = router;