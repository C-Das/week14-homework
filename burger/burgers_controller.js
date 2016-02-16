var burger = require('./models/burger.js');
var connection = require('./config/connection.js');
var express = require ('express');
var app = express();
var PORT = process.env.NODE_ENV || 8080;
var expressHanldlebars = require ('express-handlebars');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.engine('handlebars',expressHanldlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get('/',function(req,res){
  var string = 'SELECT id,burger_name FROM burgers';
    connection.query(string, function(err, results) {
      if (err) {
        throw err;
      }
        var data = {
          burgers_data :results
        }
        res.render('index',data);
      });
    // burger.findAllBurgers(function(burgers_data){
    //   console.log("Hi got here");
    //   res.render('index',{burgers_data:burgers_data});
    // })
  });

app.post('/save',function(req,res){
  var string = "INSERT INTO burgers(burger_name) VALUES('"+req.body.newBurger+"');"
    connection.query(string, function(err, results) {
      if (err) {
        throw err;
      }
        res.redirect('/');
      });
    // burger.findAllBurgers(function(burgers_data){
    //   console.log("Hi got here");
    //   res.render('index',{burgers_data:burgers_data});
    // })
  });

app.listen(PORT,function(){
  console.log("Application is running on PORT %s", PORT);
});