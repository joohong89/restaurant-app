let express  = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
      configDB = require('./config/DB');

const dishRoute = require('./route/dish.route');
const orderRoute = require('./route/order.route');

//define port number
var port = process.env.PORT || 4000;


//Database connection
mongoose.Promise = global.Promise;
mongoose.connect(configDB.DB).then(
  () => {console.log("Database is connected");},
  (err) => {console.log("Error connecting to DB : " + err)}

);



const app = express();


app.use(bodyParser.json());
app.use(cors());

//Restful api
app.use('/order', orderRoute);
app.use('/dish', dishRoute);


var server = app.listen(port, function(){
  console.log("Listening on port : " + port);
});
