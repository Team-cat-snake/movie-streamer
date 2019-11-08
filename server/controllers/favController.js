const pool = require ('../database.js');

const getFavs = (req, res, next) => {
  const queryForFavs = `SELECT * FROM Favorites WHERE USER_NAME = '${req.body.user_name}'`
  pool.query(queryForFavs, (err, result) => {
    if (err) return next(err);
    if (result === undefined) {
      return next()
    };
    res.locals.favs = result.rows;
    return next();
  });
}

const addFavs = (req, res, next) => {
  const {id, title, poster, rating, rate_count, release_date, user_name} = req.body;
  const queryAddFavs = `INSERT INTO Favorites (ID, TITLE, POSTER, RATING, RATE_COUNT, RELEASE_DATE, USER_NAME) VALUES (${id}, '${title}', '${poster}', ${rating}, ${rate_count}, '${release_date}', '${user_name}')`;
  pool.query(queryAddFavs, (err, result) => {
    if(err) return next(err);
    res.locals.favs = result.rows;
    return next();
  })
}

const deleteFavs = (req, res, next) => {
  const {id, user_name} = req.body;
  const queryDeleteFavs = `DELETE FROM Favorites WHERE ID=${id} AND USER_NAME=${user_name}`;
  pool.query(queryDeleteFavs, (err, result) => {
    if(err) return next(err);
    res.locals.favs = result.rows;
    return next();
  })
}

module.exports = {
  getFavs,
  addFavs,
  deleteFavs
};