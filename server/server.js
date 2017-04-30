// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var routes     = require('./src/routes');
var config     = require('./src/config');
var path 	   = require('path');
var WebSocket  = require('ws');
// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

if(config.useMongo){
  var mongoose   = require('mongoose');
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongo.dbUrl); // connect to our database  
}


// SQL
if(config.useSql){
    var Sequelize = require('sequelize');
    var sequelize = new Sequelize(config.sql.db, config.sql.user, config.sql.pass);
}
// WEBSOCKET SERVER

 
const wss = new WebSocket.Server({ port: config.websocket.port });
 
wss.broadcast = function broadcast(data) {

  wss.clients.forEach(function each(client) {
      
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};
 
wss.on('connection', function connection(ws) {
  console.log("new connection to websocket");
  
  ws.on('message', function incoming(data) {
    console.log("incoming message: "+data);
  });
});

app.set('wss',wss);
// REGISTER OUR ROUTES -------------------------------
require('./src/routes').default(app);

app.use(express.static(path.join(__dirname, '..','client')));
// API FALLBACK
app.use(function(req, res, next) {
    res.sendFile(path.join(__dirname ,'..','/client/index.html'));
});
app.set('etag', false);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

// uncaughtException
process.on('uncaughtException', function (err) {
  console.log(err);
})