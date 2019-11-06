const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const userController = require('./controllers/UserController.js');
const sessionController = require('./controllers/SessionController.js');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

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

app.get("/", (req, res) => {
   res.status(200).sendFile(path.resolve(__dirname, '../src/views/index.html'));
});

app.get("/login", (req, res) => {
  res.status(200).json()
})

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