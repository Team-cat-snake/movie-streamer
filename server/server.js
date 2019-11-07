const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const userController = require('./controllers/UserController.js');
const sessionController = require('./controllers/SessionController.js');
const movies = require('./routes/movie.js');
const favs = require('./routes/favorites.js');
const toWatch = require('./routes/toWatch.js')

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/favs', favs);
app.use('/movie', movies);

app.get('/loggedIn', sessionController.isLoggedIn, (req, res) => {
  res.status(200).send(res.locals);
});

app.post('/login', userController.verifyUser, sessionController.startSession, (req, res) => {
	res.status(200).send(res.locals);
});

app.post('/signup', userController.createUser, sessionController.startSession, (req, res) => {
  res.redirect("/search");
});

app.get("/", (req, res) => {
   res.status(200).sendFile(path.resolve(__dirname, '../src/views/index.html'));
});

app.all('*', (req, res) => {
  res.sendStatus(404);
});

const defaultError = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: { err: 'An error occurred' }, 
};

app.use((err, req, res, next) => {
  const errorObj = { ...defaultError, ...err };
  console.error(errorObj.log);
  return res.json({
    status: errorObj.status,
    message: errorObj.message,
  });
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});