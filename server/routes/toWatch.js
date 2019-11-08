const express = require('express');
const watchController = require('../controllers/watchController');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('..')
})

router.post('/', watchController.getWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
});

router.post('/add', watchController.addWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
})

router.delete('/', watchController.deleteWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
})

module.exports = router;