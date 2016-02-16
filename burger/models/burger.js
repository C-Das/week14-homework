var orm = require('../config/orm.js');

var burger = {
  findAllBurgers : function(callback) {
    orm.selectBurgers('burgers',function(res){
      callback(res);
    });
  }
};

module.exports = burger;