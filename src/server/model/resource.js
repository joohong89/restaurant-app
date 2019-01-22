const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ResourceSchema = new Schema(
  {
    resource: String
  },
  {collection: 'Resource'}
);

const Resource = module.exports = mongoose.model('Resource', ResourceSchema);

module.exports.getMenuResourcesByRoles = function(roles){

  var ids = [];

  roles.forEach(role => {

    items = role.resources;

    ids.push(...items)
  });


  return Resource.find({
    "_id": {
      "$in": ids
    },
    "type": "M"
  })
};
