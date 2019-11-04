const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("body-parser");
const path = require("path")

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/", (req, res) => {
   res.status(200).sendFile(path.resolve(__dirname, '../src/views/index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});