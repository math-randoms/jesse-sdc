const mongoose = require('mongoose');
const propertySchema = require('./propertySchema.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/airbnbDesc')
  .then(()=>{console.log('connected to mongoDB')});

// mongoose.set('useCreateIndex', true);

var Property = mongoose.model('Property', propertySchema);

module.exports = Property;