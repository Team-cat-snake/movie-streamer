const pool = require ('../database.js');

const getWatch = (req, res, next) => {
  const queryForWatch = `SELECT * FROM ToWatch WHERE USER_NAME = '${req.body.user_name}'`
  pool.query(queryForWatch, (err, result) => {
    if (err) return next(err);
    if (result === undefined) {
      return next()
    };
    res.locals.watch = result.rows;
    return next();
  });
}

const addWatch = (req, res, next) => {
  const {movie_id, title, poster, rating, rate_count, release_date, user_name} = req.body;
  const queryAddWatch = `INSERT INTO ToWatch (MOVIE_ID, TITLE, POSTER, RATING, RATE_COUNT, RELEASE_DATE, USER_NAME) VALUES (${movie_id}, '${title}', '${poster}', ${rating}, ${rate_count}, '${release_date}', '${user_name}')`;
  pool.query(queryAddWatch, (err, result) => {
    if(err) return next(err);
    res.locals.watch = result.rows;
    return next();
  })
}

const deleteWatch = (req, res, next) => {
  const {movie_id, user_name} = req.body;
  const queryDeleteWatch = `DELETE FROM ToWatch WHERE MOVIE_ID=${movie_id} AND USER_NAME=${user_name}`;
  pool.query(queryDeleteWatch, (err, result) => {
    if(err) return next(err);
    res.locals.watch = result.rows;
    return next();
  })
}

module.exports = {
  getWatch,
  addWatch,
  deleteWatch
};