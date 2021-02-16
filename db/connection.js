const password = require("../secrets.js");

const mysql = require("mysql");
const password = require("secretes.js");

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

<<<<<<< HEAD
module.exports = connection;
=======
module.exports = connection;
>>>>>>> 0191e8fb63f67327d6a4cf84e9052d13bbdf184f
