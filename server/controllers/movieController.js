require('dotenv').config();
const axios = require('axios');
const movieController = {};
const { imageURL } = require('../utils/imageURL');

movieController.getNowPlaying = (req, res, next) => {

  axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    .then(result => {
      res.locals.nowPlaying = result.data.results;
      
      return next();
    })
    .catch(err => next({
      log: `movieController.getNowPlaying: ERROR: ${err}`,
      message: { err: 'movieController.getNowPlaying: ERROR: Check server logs for details' },
    }));
}

movieController.getSearchedResult = (req, res, next) => {
  let searched = req.params.searched;
  // change space to + for the API query format
  searched = searched.replace(' ', '+');

  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searched}`)
    .then(result => {
      res.locals.searchResult = result.data.results;
      return next();
    })
    .catch(err => next({
      log: `movieController.getSearchedResult: ERROR: ${err}`,
      message: { err: 'movieController.getSearchedResult: ERROR: Check server logs for details' },
    }))
};

movieController.getDetail = (req, res, next) => {
  let movieId = req.params.movieId;

  axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`)
    .then(result => {
      res.locals.movieDetail = result.data.results;
      return next();
    })
    .catch(err => next({
      log: `movieController.getDetail: ERROR: ${err}`,
      message: { err: 'movieController.getDetail: ERROR: Check server logs for details' },
    }))
};

module.exports = movieController;