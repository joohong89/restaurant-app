let express  = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    configDB = require('./config/server'),
    passport = require('passport');

const dishRoute = require('./route/dish.route');
const orderRoute = require('./route/order.route');
const loginRoute = require('./route/login.route');

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

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//require('./config/passport')(passport);

//Restful api
app.use('/order', orderRoute);
app.use('/dish', dishRoute);
app.use('/login', loginRoute);


var server = app.listen(port, function(){
  console.log("Listening on port : " + port);
});
