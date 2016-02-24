var orm = require('../config/orm.js');

var burger = {
  findAllBurgers : function(devouredInput,cb) {
    orm.selectBurgers('burgers',devouredInput, cb);
  },
  addOneBurger: function(nameInput,cb) {
    orm.insertOne('burgers', nameInput,cb);
  },
  updateOneBurger: function(inputId, cb){
    orm.updateOne('burgers',inputId, cb);
  },
};

module.exports = burger;