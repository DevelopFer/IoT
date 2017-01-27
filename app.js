var express = require('express');
var app = express();
var port = 1337;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('bower_components'));
/*app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded*/

app.get('/',function(req,res,next){
	res.render('index',{title:'Main Section'});
});


app.listen(port,function(){
	console.log('Server is up and running at port 1337 :)');
});