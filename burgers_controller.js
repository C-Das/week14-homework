var burger = require('./models/burger.js');
var connection = require('./config/connection.js');
var express = require ('express');
var app = express();
var PORT = process.env.PORT || 8080;
var expressHanldlebars = require ('express-handlebars');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.engine('handlebars',expressHanldlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(express.static('public'));

app.get('/',function(req,res){

    burger.findAllBurgers(0,function(burgers_data){
      burger.findAllBurgers(1,function(devoured_data) {
        res.render('index',{burgers_data:burgers_data,devoured_data:devoured_data});
      });
    });
  });

app.post('/save',function(req,res){

    burger.addOneBurger(req.body.newBurger,function(result){
      res.redirect('/');
    })
  });

app.post('/update/:id',function(req,res){

  burger.updateOneBurger(req.params.id, function(result){
    res.redirect('/');
  });
});

app.get('/*',function(req,res){
  res.redirect('/');
});

app.listen(PORT,function(){
  console.log("Application is running on PORT %s", PORT);
});
