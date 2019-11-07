const pool = require ('../database.js');

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const createUser = (req, res, next) => {
  console.log("INSIDE CREATE USER", req.body)
  if (!req.body.user || !req.body.pass) return res.redirect('/signup', {error: 'Please properly format the username and password'});
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(req.body.pass, salt, function (err, hash) {
      if (err) return next (err);
      req.body.pass = hash;
      console.log("hash", hash)
      let queryForSignUp = `INSERT INTO Users (NAME, PASSWORD) VALUES ('${req.body.user}', '${req.body.pass}') ON CONFLICT (NAME) DO NOTHING`;
      pool.query(queryForSignUp, (err, result) => {
        if (err) return next({err: "Error creating user"});
        res.locals.user = req.body.user;
        console.log("locals", res.locals.user)
        return next();
      })
    })
  });
};

const verifyUser = (req, res, next) => {
  let queryforPW = `SELECT PASSWORD FROM Users WHERE NAME = '${req.body.user}'`;
  pool.query(queryforPW, function (err, result) {
  if (err) return res.send('Not Verified');
    bcrypt.compare(req.body.pass, result.rows[0].password, (err, result) => {
      if (err) return next(err);
      res.locals.user = req.body.user;
      if (result) return next();
      else return res.send('Not Verified');
    })
  })
}

module.exports = {
  createUser,
  verifyUser
};