const mysql = require("mysql");
const dbConfig = require("../config/db-config.js");

console.log("****************" + dbConfig.USER)

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the mysql connection
connection.connect((err) => {
  if(err) throw "error connection";
 console.log("ok connection")
});

module.exports = connection;

/* open the MySQL connection
connection.connect(error => {
  if (error) throw error; console.log(toString(error));
  console.log("Successfully connected to the database.");
});*/

module.exports = connection;
