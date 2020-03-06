const express = require("express");

const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route

app.get('/', (req, res) => {
  res.send("Welcome to fathia application.");
 
});

//require = ("../routes/product.routes.js");
require("./routes/product.routes")(app);

//routes de l'application produit


// set port, listen for requests
/*app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});*/
app.listen(8888, () => {
  console.log("Server is running on port 8888.");
});
