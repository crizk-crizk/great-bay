const password = require("../secrets.js");

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  // Your port, if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Be sure to update with your own MySQL password!
  password: password,
  database: "greatbay_db",
});
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});

module.exports = connection;
