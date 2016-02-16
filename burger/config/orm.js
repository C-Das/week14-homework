var connection = require('./connection.js');

var orm = {
  selectBurgers: function(tableInput) {
    var string = 'SELECT id,burger_name FROM ' + tableInput;
    connection.query(string, function(err, result) {
      if (err) {
        throw err;
      }
        // console.log(result);
      });
  },
};
module.exports = orm;