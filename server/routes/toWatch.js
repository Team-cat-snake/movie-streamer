const express = require('express');
const watchController = require('../controllers/watchController');
const router = express.Router();

router.get('/', watchController.getWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
});

router.post('/', watchController.addWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
})

router.delete('/', watchController.deleteWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
})

module.exports = router;