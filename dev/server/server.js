var restify = require('restify');
var mongojs = require('mongojs');
var morgan = require('morgan');
var db = mongojs('bucklistapp', ['appusers', 'bucketLists']);
var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser);
server.use(restify.bodyParser);
server.use(morgan('dev'));


server.use(function(req, res, next){
	res.header('Access-Control-Allow-Origins', "*");
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

server.listen(process.env.PORT || 9000, function(){
	console.log('Server Started @ ', process.env.PORT || 9000);
})