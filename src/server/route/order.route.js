const express = require('express');
const app = express();
const orderRouter = express.Router();

let Order = require('../model/Order');
const authenticationService = require('../common/authentication');
const STATUS_PROCESSING = 'Processing';



orderRouter.route('/orderSubmit').post(authenticationService.authenticate() ,(req, res) => {

  let body = req.body;
  let total = 0;


  body.forEach((item, index) => {
    console.log('Price : '+ item.price);
    total += (item.quantity * item.price);
  });

  let order = new Order({
    status: STATUS_PROCESSING,
    details: body,
    total: total
  });

  console.log(order);

  order.save().then(item => {
    res.status(200).json({'order': 'Order submitted successfully'});
  }).catch(err => {
    res.status(400).send("unable to save to database");
    console.log(err);
  });


});

orderRouter.route('/getOrder').get(authenticationService.authenticate() ,(req,res) => {

  Order.find({status: STATUS_PROCESSING}).then(item => {
    res.status(200).json(item);
  }).catch(err => {
    res.stat(400).send("Unable to save to database");
  });
});

module.exports = orderRouter;
