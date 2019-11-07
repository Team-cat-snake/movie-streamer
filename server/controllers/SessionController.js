const pool = require ('../database.js');
const uuidv4 = require('uuid/v4');

const isLoggedIn = (req, res, next) => {
  if (req.headers.cookie === undefined) return next();
  const queryForCookie = `SELECT * from Sessions WHERE COOKIEID = '${req.headers.cookie.slice(9)}'`
  pool.query(queryForCookie, (err, result)=> {
    if (result === undefined) return next();
    if (err) return next(err);
    res.locals.cookie = result.rows[0];
    res.locals.verified = 'verified';
    return next();
  });
};

const startSession = (req, res, next) => {
  let cookie = uuidv4();
  const queryForCookie = `INSERT INTO Sessions (COOKIEID, USERID) VALUES ('${cookie}', '${req.body.user}') ON CONFLICT (USERID) DO UPDATE SET COOKIEID = '${cookie}'`;
  pool.query(queryForCookie, (err, result) => {
    if (err) return next(err);
    res.cookie('MSCookie', cookie, { httpOnly: true });
    res.locals.verified = 'verified';
    return next();
  });
};

const logOut = (req, res, next) => {
  console.log(req.body)
  const queryForCookie = `DELETE FROM Sessions WHERE USERID = '${req.body.user}'`;
  pool.query(queryForCookie, (err, result) => {
    if (err) return next(err);
    res.locals.logOut = 'logOut';
    return next();
  });
};

module.exports = {
  isLoggedIn,
  startSession,
  logOut
};
