const express = require('express');
const movieController = require('../controllers/movieController');
const router = express.Router();

router.get('/', movieController.getNowPlaying, (req, res) => {
    return res.status(200).json({nowPlaying: res.locals.nowPlaying});
});

router.get('/search/:searched', movieController.getSearchedResult, (req, res) => {
    return res.status(200).json({searchResult: res.locals.searchResult});
});

router.get('/details/:movieId', movieController.getDetail, (req, res) => {
    return res.status(200).json({movieDetail: res.locals.movieDetail}); ``
});

module.exports = router;