const expressJWT = require('express-jwt');
const config = require('../config/server');

function authenticate(){
 return expressJWT({
    secret: config.secret
  })
}

module.exports = {
  authenticate: authenticate
}
