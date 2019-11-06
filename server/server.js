const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const userController = require('./controllers/UserController.js');
const sessionController = require('./controllers/SessionController.js');

const PORT = 3000;
const app = express();

const movieRouter = require('./routes/movie');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/movie', movieRouter);

app.get('/loggedIn', sessionController.isLoggedIn, (req, res) => {
  if (res.locals.verified === 'verified') {
    res.status(200).send(res.locals);
  } else {
    res.status(200).sendFile(path.resolve(__dirname, '../src/views/index.html'));
  }
});

app.post('/login', userController.verifyUser, sessionController.startSession, (req, res) => {
	res.send("verified");
});

app.post('/signup', userController.createUser, sessionController.startSession, (req, res) => {
	res.send("user Created");
});
 
app.get("/",  (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/views/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  return res.status(404).send('Page Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };

  let errObj = Object.assign(defaultErr, err);
  return res.status(errObj.status).send(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});