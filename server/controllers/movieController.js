require('dotenv').config();
const axios = require('axios');
const movieController = {};
const { imageURL } = require('../utils/imageURL');

movieController.getNowPlaying = (req, res, next) => {

  axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    .then(result => {
      const results = result.data.results;
      res.locals.nowPlaying = [];
      for(let i = 0; i < Object.keys(results).length; i++) {
        if(results[i].poster_path) {
          res.locals.nowPlaying.push({
            id: results[i].id,
            title: results[i].title,
            poster: imageURL(results[i].poster_path),
            rating: results[i].vote_average,
            rateCount: results[i].vote_count
          })
        }
      }
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
      const results = result.data.results;
      res.locals.searchResult = [];
      for(let i = 0; i < Object.keys(results).length; i++) {
        if(results[i].poster_path) {
          res.locals.searchResult.push({
            id: results[i].id,
            title: results[i].title,
            poster: imageURL(results[i].poster_path),
            rating: results[i].vote_average,
            rateCount: results[i].vote_count
          })
        }
      }
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
      const movieDetail = result.data;
      res.locals.movieDetail = {
        id: movieDetail.id,
        title: movieDetail.title,
        budget: movieDetail.budget,
        backdrop: imageURL(movieDetail.backdrop_path? movieDetail.backdrop_path : movieDetail.poster_path),
        poster: imageURL(movieDetail.poster_path),
        overview: movieDetail.overview,
        rating: movieDetail.vote_average,
        rateCount: movieDetail.rateCount,
        tagline: movieDetail.tagline,
        realeaseDate: movieDetail.realease_date,
        hompage: movieDetail.hompage
      }
      return next();
    })
    .catch(err => next({
      log: `movieController.getDetail: ERROR: ${err}`,
      message: { err: 'movieController.getDetail: ERROR: Check server logs for details' },
    }))
};

module.exports = movieController;