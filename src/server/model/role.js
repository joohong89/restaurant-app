const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Resource = require('./resource');

let RoleSchema = new Schema(
  {
    resources: []
  },
  {collection: 'Role'}
);

const Role = module.exports = mongoose.model('Role', RoleSchema);

module.exports.getRolesByIdArray = function(ids) {
  return Role.find({
    "_id": {
      "$in": ids
    }
  });
};
