const express = require('express');
const app = express();
const dishRoutes = express.Router();

let Dish = require('../model/Dish');


dishRoutes.route('/').get((req,res) => {

  Dish.find((err, dish) => {
    if(err){
      console.log("Error Retrieving Dishes : "+ err);
    }else{
      res.json(dish);
    }
  });
});

module.exports = dishRoutes;
