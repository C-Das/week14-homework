var connection = require('./connection.js');

var orm = {
  selectBurgers: function(tableInput,devouredInput,cb) {
    var string = 'SELECT id,burger_name FROM ' + tableInput+' WHERE devoured = ?';
    connection.query(string,[devouredInput], function(err, result) {
      if (err) {
        throw err;
      }
        cb(result);
      });
  },
  insertOne: function(tableInput, nameInput,cb) { 
    var string = 'INSERT INTO ' + tableInput + ' (burger_name,devoured) VALUES (?, ?)';
    
    connection.query(string, [nameInput,0], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, idInput, cb) {
    var string = 'UPDATE ' + tableInput + ' SET devoured = 1  WHERE id = ?';
    connection.query(string, [idInput], function(err, result) {
    
    if (err) throw err;
      cb(result);
    });
  },
};
module.exports = orm;