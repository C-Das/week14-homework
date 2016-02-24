var mysql = require('mysql');

var connection = mysql.createConnection({
  PORT : 3306,
  host :'localhost',
  user :'root',
  database : 'burger_db'
});

connection.connect(function(err){
  if(err){
    throw err;
  }
});

module.exports = connection;