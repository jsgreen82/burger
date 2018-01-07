var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    password: 'root',
    database: "burger_db"

});
//connect to database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

//export connection for ORM
module.exports = connection;